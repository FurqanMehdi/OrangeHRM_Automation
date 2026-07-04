class Sidebar {

    constructor(page) {
        this.page = page;

        this.admin = page.getByRole('link', { name: 'Admin' });
        this.pim = page.getByRole('link', { name: 'PIM' });
        this.leave = page.getByRole('link', { name: 'Leave' });
        this.time = page.getByRole('link', { name: 'Time' });
        this.recruitment = page.getByRole('link', { name: 'Recruitment' });
        this.performance = page.getByRole('link', { name: 'Performance' });
        this.directory = page.getByRole('link', { name: 'Directory' });
        this.maintenance = page.getByRole('link', { name: 'Maintenance' });
        this.claim = page.getByRole('link', { name: 'Claim' });
        this.buzz = page.getByRole('link', { name: 'Buzz' });
    }

    async openAdmin() {
        await this.admin.click();
    }

    async openPIM() {
        await this.pim.click();
    }

    async openLeave() {
        await this.leave.click();
    }

    async openTime() {
        await this.time.click();
    }

    async openRecruitment() {
        await this.recruitment.click();
    }

    async openPerformance() {
        await this.performance.click();
    }

    async openDirectory() {
        await this.directory.click();
    }

    async openMaintenance() {
        await this.maintenance.click();
    }

    async openClaim() {
        await this.claim.click();
    }

    async openBuzz() {
        await this.buzz.click();
    }

}

module.exports = Sidebar;