db.createUser(
    {
        user: "symfony",
        pwd: "symfony",
        roles: [
            {
                role: "readWrite",
                db: "symfony"
            }
        ]
    }
);