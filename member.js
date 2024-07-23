function skillsMember() {
    var member = this;
    member.machineName = 'Copilot';
    member.skills = ['HTML', 'CSS', 'JS'];
    member.skill = function () {
        return member.skills.join(', ');
    };
}