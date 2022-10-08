import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatedDependency1664767346179 implements MigrationInterface {
    name = 'UpdatedDependency1664767346179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`author\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`book\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`category\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`publisher\` (\`ID\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`ID\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`publisher\``);
        await queryRunner.query(`DROP TABLE \`category\``);
        await queryRunner.query(`DROP TABLE \`book\``);
        await queryRunner.query(`DROP TABLE \`author\``);
    }

}
