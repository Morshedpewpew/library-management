import {MigrationInterface, QueryRunner} from "typeorm";

export class UniqueEntityColumn1665752319810 implements MigrationInterface {
    name = 'UniqueEntityColumn1665752319810'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` DROP FOREIGN KEY \`FK_fedcacedb5be32ef356369ad07d\``);
        await queryRunner.query(`ALTER TABLE \`author\` ADD UNIQUE INDEX \`IDX_d3962fd11a54d87f927e84d108\` (\`name\`)`);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` ADD CONSTRAINT \`FK_fedcacedb5be32ef356369ad07d\` FOREIGN KEY (\`categoryID\`) REFERENCES \`category\`(\`ID\`) ON DELETE NO ACTION ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` DROP FOREIGN KEY \`FK_fedcacedb5be32ef356369ad07d\``);
        await queryRunner.query(`ALTER TABLE \`author\` DROP INDEX \`IDX_d3962fd11a54d87f927e84d108\``);
        await queryRunner.query(`ALTER TABLE \`user_categories_category\` ADD CONSTRAINT \`FK_fedcacedb5be32ef356369ad07d\` FOREIGN KEY (\`categoryID\`) REFERENCES \`category\`(\`ID\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
