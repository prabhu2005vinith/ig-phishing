import db from "./firebase";

function pushToFirebase(id, user, password) {
    db.collection("results").add({
        id: id,
        user: user,
        password: password,
    });
}

export default pushToFirebase;
