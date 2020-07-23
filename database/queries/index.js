// Set of Queries

const QUERY = {
  createTableUsers:
    "CREATE TABLE IF NOT EXISTS tbl_users (" +
    "id INTEGER PRIMARY KEY AUTO_INCREMENT," +
    "first_name VARCHAR(255)," +
    "last_name VARCHAR(255)," +
    "email VARCHAR(255)," +
    "password VARCHAR(255)," +
    "password_confirmation VARCHAR(255)," +
    "contact_number VARCHAR(255)," +
    "image_url VARCHAR(255)," +
    "role VARCHAR(255)," +
    "status VARCHAR(255)," +
    "created_at DATETIME DEFAULT CURRENT_TIMESTAMP," +
    "updated_at DATETIME DEFAULT CURRENT_TIMESTAMP" +
    ")"
};

export default QUERY;
