PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "_prisma_migrations" (
    "id"                    TEXT PRIMARY KEY NOT NULL,
    "checksum"              TEXT NOT NULL,
    "finished_at"           DATETIME,
    "migration_name"        TEXT NOT NULL,
    "logs"                  TEXT,
    "rolled_back_at"        DATETIME,
    "started_at"            DATETIME NOT NULL DEFAULT current_timestamp,
    "applied_steps_count"   INTEGER UNSIGNED NOT NULL DEFAULT 0
);
INSERT INTO _prisma_migrations VALUES('d5ad81f9-be7e-4e1f-b14b-0a5c37002485','05d65c0f5984afae79c2a13774b3355b11b89fefeacb733cbd7756d761f7223c',1732777316386,'20241127233807_init',NULL,NULL,1732777316384,1);
CREATE TABLE IF NOT EXISTS "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);
INSERT INTO User VALUES(1,'alireza@gmail.com','Alireza Nikzad');
CREATE TABLE IF NOT EXISTS "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);
INSERT INTO Contact VALUES('cm40z46kr0000j6vg0t83bdvi','Alireza','Nikzad');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('User',1);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
COMMIT;
