const db = require("../models/db");
const queries = require("../models/queries");
const asyncHandler = require("express-async-handler");
const { format, parseISO } = require("date-fns");

const getAllMessages = asyncHandler(async (req, res) => {
  const messages = await queries.getAllMessages();

  const formattedMessages = messages.map((message) => {
    const formattedDate = format(message.added, "MMM dd, yyyy");
    return {
      id: message.id,
      text: message.text,
      user: message.user,
      added: format(message.added, "MMM dd, yyyy"),
    };
  });

  if (!formattedMessages) {
    throw new Error("Messages not found");
  }
  res.render("index", { messages: formattedMessages });
});

const addNewMessage = asyncHandler(async (req, res) => {
  const { user, message } = req.body;
  await queries.addNewMessage(user, message);
  res.redirect("/");
});

module.exports = {
  getAllMessages,
  addNewMessage,
};
