import {MigrationInterface, QueryRunner} from "typeorm";

export class libraryCategory1665276423893 implements MigrationInterface {
    name = 'libraryCategory1665276423893'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_categories_category\` (\`userID\` int NOT NULL, \`categoryID\` int NOT NULL, INDEX \`IDX_09dab94a6179d8c6539347bdf6\` (\`userID\`), INDEX \`IDX_fedcacedb5be32ef356369ad07\` (\`categoryID\`), PRIMARY KEY (\`userID\`, \`categoryID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` ADD CONSTRAINT \`FK_09dab94a6179d8c6539347bdf6f\` FOREIGN KEY (\`userID\`) REFERENCES \`user\`(\`ID\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` ADD CONSTRAINT \`FK_fedcacedb5be32ef356369ad07d\` FOREIGN KEY (\`categoryID\`) REFERENCES \`category\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` DROP FOREIGN KEY \`FK_fedcacedb5be32ef356369ad07d\``);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` DROP FOREIGN KEY \`FK_09dab94a6179d8c6539347bdf6f\``);
        await queryRunner.query(`DROP INDEX \`IDX_fedcacedb5be32ef356369ad07\` ON \`user_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_09dab94a6179d8c6539347bdf6\` ON \`user_categories_category\``);
        await queryRunner.query(`DROP TABLE \`user_categories_category\``);
    }

}
