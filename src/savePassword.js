import db from "./firebase";

function pushToFirebase(id, user, password) {
    db.collection("results").doc(id).set({
        id: id,
        user: user,
        password: password,
    });
    console.log("Done");
}

export default pushToFirebase;
