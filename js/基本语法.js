var name = 'walden';

function alert_asd() {
    alert('hello world');
}

function confirm_asd() {
    confirm("您真的要关闭此网页么？");
}

function prompt_asd() {
    prompt("请输入您的会员卡号");
}

function console_asd() {
    console.log("This is log message");
}

function write_asd() {
    document.write("大家好<br>我是鲁班七号");
}

function get_name() {
    alert(name);
    var name = 'wang';
    alert(name);
}

function get_name_ori() {
    alert(name);
}

function parse_to_str(num) {
    return String(num);
}

function parse_to_num(str) {
    return Number(str);
}

function parse_to_int(str) {
    return parseInt(str);
}

function parse_to_float(str) {
    return parseFloat(str);
}

function parse_to_boolean(str) {
    return Boolean(str);
}


function setValue1(num, compo) {
    compo.textContent = parse_to_str(num);
}

function setValue2_1(str, compo) {
    compo.textContent = parse_to_num(str);
}

function setValue2_2(str, compo) {
    compo.textContent = parse_to_int(str);
}

function setValue2_3(str, compo) {
    compo.textContent = parse_to_float(str);
}

function setValue3(str, compo) {
    compo.textContent = parse_to_boolean(str);
}

function array_concat(a, b) {
    return a.concat(b);
}

function parse_array_to_str(a, b, compon) {
    compon.textContent = String(array_concat(a, b));
}

function array_joint(a, compon) {
    compon.textContent = a.join('~');
}

function Game(name, age) {
    Game.year = "1990";   // 类变量
    this.name = name;   // 实例变量
    this.age = age;
    this.print = function () {
        document.writeln('name=' + name + '<br>' + 'age=' + age + '<br>year=' + Game.year)
    }
}

function cearteObject1() {
    var game = new Game('dota', 10);
    game.print();
}

function createObject2() {
    var hero = {};
    hero.name = "鲁班七号";     // 实例变量
    hero.skill = " 河豚炸弹";
    hero.print = function () {
        document.writeln('name=' + this.name + '<br>' + 'skill=' + this.skill);
    };
    hero.print();

}

function createObject3() {
    cup = {
        name: "beizi",
        material: "china",
        print: function () {
            document.writeln('name=' + this.name + '<br>' + 'material=' + this.material)
        }
    };
    cup.print();
}



