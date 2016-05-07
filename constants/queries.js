module.exports = {
  users: {
    post: "INSERT INTO users (name, email, password) VALUES (?,?,?)",
    getUserByEmail: "SELECT name, id, email, house_id, password FROM users WHERE email = ?",
    findUserById: "SELECT name, id, email, house_id, password FROM users WHERE id = ?",
    getUsersInHouse: "SELECT id, name, email, user_image_url FROM users WHERE house_id = ?",
    getUserImage: "SELECT user_image_url FROM users WHERE id = ?"
  },
  
  messages: {
    get: "SELECT users.name, users.user_image_url, messages.text, DATE_FORMAT(messages.time,'%W, %M %e, %Y %h:%i %p') AS time FROM messages LEFT OUTER JOIN users ON (messages.user_id=users.id) WHERE messages.house_id=? AND is_landlord_chat=0 ORDER BY messages.time DESC LIMIT 50",
    post: "INSERT INTO messages (user_id, text, house_id, time) VALUES (?,?,?, NOW())",
    getLandlord: "SELECT users.name, users.user_image_url, users.is_landlord, messages.text, DATE_FORMAT(messages.time,'%W, %M %e, %Y %h:%i %p') AS time FROM messages LEFT OUTER JOIN users ON (messages.user_id=users.id) WHERE messages.house_id=? AND is_landlord_chat=1 ORDER BY messages.time DESC LIMIT 50",
    postLandlord: "INSERT INTO messages (user_id, text, house_id, time, is_landlord_chat) VALUES (?,?,?, NOW(),1)"
  },

  chores: {
    get: "SELECT users.name, chores.id, chores.name as chorename, chores.category, chores.completed, chores.due_date, chores.house_id from chores LEFT OUTER JOIN users ON (chores.user_id = users.id) WHERE Chores.house_id=? and completed=0 ORDER BY chores.due_date",
    post: "INSERT INTO chores (user_id, name, category, due_date, house_id) VALUES (?,?,?,?,?)"
  },

  bills: {
    getUnpaidBills: "SELECT bills.name AS billName, bills.due_date, payments.amount, bills.total, users.name AS whoIsOwed, users.email AS whoIsOwedEmail, payments.id AS paymentId, bills.id AS billId FROM payments LEFT OUTER JOIN bills ON (payments.bill_id=bills.id) LEFT OUTER JOIN users ON (users.id=bills.user_id) WHERE payments.paid=0 AND payments.user_id=? AND bills.user_id <> ? ORDER BY bills.due_date",
    getPaidBills: "SELECT bills.name AS billName, bills.due_date, payments.amount, users.name AS whoIsOwed, payments.id AS paymentId, bills.id AS billId FROM payments LEFT OUTER JOIN bills ON (payments.bill_id=bills.id) LEFT OUTER JOIN users ON (users.id=bills.user_id) WHERE payments.paid=1 AND payments.user_id=? ORDER BY -payments.date_paid LIMIT 5",
    post: "INSERT INTO bills (user_id, total, name, due_date) VALUES (?,?,?,?)"
  },

  payments: {
    getWhatIsOwedToUser: "SELECT users.name AS ower, payments.amount, bills.name AS billName, bills.due_date, bills.id AS billId, payments.id AS paymentID FROM bills LEFT OUTER JOIN payments ON (bills.id=payments.bill_id) LEFT OUTER JOIN users ON (payments.user_id=users.id) WHERE bills.user_id = ? AND payments.user_id <> ? AND payments.paid=0 ORDER BY bills.due_date",
    getWhatHasBeenPaidToUser: "SELECT users.name AS ower, payments.amount, bills.name AS billName, bills.due_date, bills.id AS billId, payments.id AS paymentID FROM bills LEFT OUTER JOIN payments on (bills.id=payments.bill_id) LEFT OUTER JOIN users ON (payments.user_id=users.id) WHERE payments.paid=1 AND bills.user_id = ? ORDER BY -payments.date_paid  LIMIT 5",
    post: "INSERT INTO payments (bill_id, user_id, amount) VALUES (?, ?, ?)",
    markPaymentAsPaid: "UPDATE payments SET paid=1, date_paid=NOW() WHERE id=?"
  },

  houses: {
    getHouseData: "SELECT id, name, email, user_image_url FROM users WHERE house_id = ?",
    getLandlord: "SELECT users.id, users.name, users.email FROM houses LEFT OUTER JOIN users ON (houses.landlord_id=users.id) WHERE houses.id = ?"
  }

}