const { $ } = require('@wdio/globals')

class DashboardPage{

    //at first get title
    get title (){
        return $('.app_logo');
    }

    //then get text from title
    get titleText (){
        return this.title.getText();
    }
}

module.exports = new DashboardPage();
