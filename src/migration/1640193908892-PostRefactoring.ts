import {MigrationInterface, QueryRunner} from "typeorm";

export class PostRefactoring1640193908892 implements MigrationInterface {
    name = 'PostRefactoring1640193908892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`imagens\` DROP FOREIGN KEY \`imagens_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`produtos\` DROP FOREIGN KEY \`produtos_ibfk_1\``);
        await queryRunner.query(`ALTER TABLE \`produtos\` CHANGE \`inCart\` \`inCart\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`produtos\` CHANGE \`count\` \`count\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`produtos\` CHANGE \`total\` \`total\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`imagens\` ADD CONSTRAINT \`FK_2d1bf52bca8a0ba9efbf39bcb6b\` FOREIGN KEY (\`produtoid\`) REFERENCES \`produtos\`(\`produtoid\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`produtos\` ADD CONSTRAINT \`FK_5ebb447bdf998fde5f7c0304424\` FOREIGN KEY (\`categoriaid\`) REFERENCES \`categorias\`(\`categoriaid\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`produtos\` DROP FOREIGN KEY \`FK_5ebb447bdf998fde5f7c0304424\``);
        await queryRunner.query(`ALTER TABLE \`imagens\` DROP FOREIGN KEY \`FK_2d1bf52bca8a0ba9efbf39bcb6b\``);
        await queryRunner.query(`ALTER TABLE \`produtos\` CHANGE \`total\` \`total\` int(1) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`produtos\` CHANGE \`count\` \`count\` int(1) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`produtos\` CHANGE \`inCart\` \`inCart\` int(1) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`produtos\` ADD CONSTRAINT \`produtos_ibfk_1\` FOREIGN KEY (\`categoriaid\`) REFERENCES \`categorias\`(\`categoriaid\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
        await queryRunner.query(`ALTER TABLE \`imagens\` ADD CONSTRAINT \`imagens_ibfk_1\` FOREIGN KEY (\`produtoid\`) REFERENCES \`produtos\`(\`produtoid\`) ON DELETE RESTRICT ON UPDATE RESTRICT`);
    }

}
