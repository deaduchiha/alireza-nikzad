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
INSERT INTO _prisma_migrations VALUES('958c4098-7638-4261-acb6-c4353bc704be','817a641ed9e0c018249080f8ddd7c8904ec8c84b0678ba80c84dee3cbbd3ac05',1732781544158,'20241128081224_init',NULL,NULL,1732781544155,1);
INSERT INTO _prisma_migrations VALUES('753db915-82e6-4e5b-be5d-c05c7d3691bb','6d586c98c8f4f0b00e3d5d87cf4da5a88706a4f64f54ea49c74b75b1b108f91e',1732781602730,'20241128081322_nariman',NULL,NULL,1732781602727,1);
CREATE TABLE IF NOT EXISTS "Contact" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL
);
INSERT INTO Contact VALUES('cm411xwuh0000tigy0cobiqtr','Alireza','Nariman');
CREATE TABLE IF NOT EXISTS "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT
);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('User',0);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
COMMIT;
