const Client = require("../models/Client.model")
const Book = require("../models/Book.model")

module.exports.clientstController = {
	getAllClients: async (req, res) => {
		try {
			const allClients = await Client.find({});
			return res.json(allClients);
		} catch (error) {
			console.log(error.message);
		}
	},

	getClientById: async (req, res) => {
		try {
			const client = await Client.find(req.params.id)
				.populate({
					path: "borrowed",
					select: "name"
				});
			return res.json(client)
		} catch (error) {
			console.log(error.message)
		}
	},

	deleteClientById: async (req, res) => {
		try {
			const deleteClient = await Client.findByIdAndDelete(req.params.id);
			return res.json(deleteClient);
		} catch (error) {
			console.log(error.message);
		}
	},

	addClient: async (req, res) => {
		try {
			const addClient = await Client.create({
				name: req.body.name,
			});
			return res.json(addClient);
		} catch (error) {
			console.log(error.message);
		}
	},


	rentBook: async (req, res) => {
		const client = await Client.findById(req.params.id);
		const book = await Book.findById(req.body.borrowed);
		try {
			if (client.isBlocked) {
				return res.json("Вы заблокированы!");
			}
			if (client.borrowed.length >= 3) {
				return res.json("нельзя арендовать больше 3-х книг одновременно!");
			}
			if (book.clientId !== null) {
				return res.json("эта книга уже арендована другим пользователем")
			}
			await client.findByIdAndUpdate(req.params.id, {
				$push: {
					borrowed: req.body.borrowed
				}
			})
			await book.findByIdAndUpdate(req.body.borrowed, {
				$push: {
					clientId: req.params.id
				}
			})
			return res.json("Книга арендована")
		} catch (error) {
			console.log(error.message)
		}
	},

	returnBook: async (req, res) => {
		try {
			await Client.findByIdAndUpdate(req.params.id, {
				$pull: {
					borrowed: req.body.borrowed
				}
			})
			await Book.findByIdAndUpdate(req.body.borrowed, {
				clientId: []
			})
			return res.json("Клиент вернул книгу")
		} catch (error) {
			console.log(error.message)
		}
	},

	block: async (req, res) => {
		try {
			await Client.findByIdAndUpdate(req.params.id, {
				borrowed: [],
				isBlocked: true
			})
			await Book.updateOne({
				$set: {
					clientId: []
				}
			})
			return res.json("БАН!!!!!")
		} catch (error) {
			console.log(error.message)
		}
	},
};