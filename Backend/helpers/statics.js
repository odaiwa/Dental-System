// SQL Commands

module.exports = {
    // Authentication Commands
    INSERT_INTO_USERS : "INSERT INTO users (username, password, firstName, lastName, email, dateOfBirth, role) VALUES (? ,? , ?, ?, ?, ?, ?)",
    LOGIN_USER:"SELECT username, password, firstName, lastName, email, dateOfBirth, role FROM users WHERE username = ? AND password = ?",
    USER_ALREADY_EXIST:"SELECT username FROM users WHERE username = ?",
    // Get Details
    GET_USER_BY_USERNAME:"SELECT * FROM users WHERE username = ?",
    GET_ALL_USERS:"SELECT * FROM GET_USERS_WITH_DETAILS",
    DELETE_USER_BY_USERNAME:"DELETE FROM users WHERE username = ?",
    //get part of users
    GET_DOCTORS : "SELECT * FROM GET_All_Doctors;",
    GET_PATIENTS : "SELECT * FROM get_all_patients;",
    GET_NURSES : "SELECT * FROM GET_All_NURSES;",
    //
    GET_PATIENTS_DOCTORS:"SELECT * FROM GET_PATIENT_DOCTOR"
} 