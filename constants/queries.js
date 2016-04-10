module.exports = {
  
  messages: {
    get: "SELECT users.name, users.user_image_url, messages.text, DATE_FORMAT(messages.time,'%W, %M %e, %Y %h:%i %p') AS time FROM messages LEFT OUTER JOIN users ON (messages.user_id=users.id) WHERE messages.house_id=? AND is_landlord_chat=0 ORDER BY messages.time DESC LIMIT 50",
    post: "INSERT INTO messages (user_id, text, house_id, time) VALUES (?,?,?, NOW())",
    getLandlord: "SELECT users.name, users.user_image_url, users.is_landlord, messages.text, DATE_FORMAT(messages.time,'%W, %M %e, %Y %h:%i %p') AS time FROM messages LEFT OUTER JOIN users ON (messages.user_id=users.id) WHERE messages.house_id=? AND is_landlord_chat=1 ORDER BY messages.time DESC LIMIT 50",
    postLandlord: "INSERT INTO messages (user_id, text, house_id, time, is_landlord_chat) VALUES (?,?,?, NOW(),1)"
  },

  chores: {
    get: "SELECT users.name, chores.id, chores.name as chorename, chores.category, chores.completed, chores.due_date, chores.house_id from chores LEFT OUTER JOIN users ON (chores.user_id = users.id) WHERE Chores.house_id=? and completed=0 ORDER BY chores.due_date"
  }

}