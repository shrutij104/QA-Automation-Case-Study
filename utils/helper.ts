export class Helper {

    static generateProjectName() {

        return `Project_${Date.now()}`;

    }

    static wait(ms: number) {

        return new Promise(resolve => setTimeout(resolve, ms));

    }

}