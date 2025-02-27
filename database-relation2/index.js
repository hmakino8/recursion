var isValidDate = function (date) {
    var regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    return regex.test(date);
};
var relation = [
    {
        id: 1,
        name: "高橋 和宏",
        gender: "男",
        dateOfBirth: "1981/08/27",
        myNumber: 16238724,
        hireDate: "2001/04/01",
        department: "総務課",
        charge: "総務",
        position: "店長",
        branch: "博多店",
        spouse: "有",
        children: 3,
        medicalCheckup: "2020/11/19",
    },
    {
        id: 2,
        name: "小林 由紀子",
        gender: "女",
        dateOfBirth: "1997/10/15",
        myNumber: 17305199,
        hireDate: "2003/05/13",
        department: "総務課",
        charge: "総務",
        position: "社員",
        branch: "博多店",
        spouse: "有",
        children: 2,
        medicalCheckup: "2021/06/25",
    },
    {
        id: 3,
        name: "村上 香織",
        gender: "女",
        dateOfBirth: "1987/01/08",
        myNumber: 20792014,
        hireDate: "2007/08/16",
        department: "総務課",
        charge: "会計",
        position: "主任",
        branch: "博多店",
        spouse: "有",
        children: 2,
        medicalCheckup: "2020/11/07",
    },
    {
        id: 4,
        name: "中川 明子",
        gender: "女",
        dateOfBirth: "1977/01/27",
        myNumber: 21152474,
        hireDate: "2012/12/10",
        department: "総務課",
        charge: "会計",
        position: "社員",
        branch: "博多店",
        spouse: "無",
        children: 1,
        medicalCheckup: "2020/12/04",
    },
    {
        id: 5,
        name: "井上 昭",
        gender: "男",
        dateOfBirth: "1999/09/15",
        myNumber: 16823936,
        hireDate: "2016/12/10",
        department: "食品課",
        charge: "惣菜",
        position: "主任",
        branch: "博多店",
        spouse: "無",
        children: 0,
        medicalCheckup: "2020/08/15",
    },
    {
        id: 6,
        name: "長谷川 雅史",
        gender: "男",
        dateOfBirth: "1985/03/01",
        myNumber: 14758574,
        hireDate: "2012/08/08",
        department: "食品課",
        charge: "惣菜",
        position: "社員",
        branch: "博多店",
        spouse: "有",
        children: 3,
        medicalCheckup: "2021/03/10",
    },
    {
        id: 7,
        name: "山口 詩織",
        gender: "女",
        dateOfBirth: "1996/07/26",
        myNumber: 19094139,
        hireDate: "2015/12/03",
        department: "食品課",
        charge: "鮮魚",
        position: "主任",
        branch: "博多店",
        spouse: "有",
        children: 1,
        medicalCheckup: "2020/10/12",
    },
    {
        id: 8,
        name: "小川 透",
        gender: "男",
        dateOfBirth: "1999/08/29",
        myNumber: 17424235,
        hireDate: "2004/12/20",
        department: "食品課",
        charge: "鮮魚",
        position: "社員",
        branch: "博多店",
        spouse: "無",
        children: 0,
        medicalCheckup: "2020/09/22",
    },
    {
        id: 9,
        name: "松山 徹",
        gender: "男",
        dateOfBirth: "1997/02/14",
        myNumber: 13771198,
        hireDate: "2010/12/23",
        department: "食品課",
        charge: "精肉",
        position: "主任",
        branch: "博多店",
        spouse: "有",
        children: 1,
        medicalCheckup: "2021/03/02",
    },
    {
        id: 10,
        name: "高田 かおり",
        gender: "女",
        dateOfBirth: "1979/11/11",
        myNumber: 18691805,
        hireDate: "2002/09/19",
        department: "食品課",
        charge: "精肉",
        position: "社員",
        branch: "博多店",
        spouse: "有",
        children: 2,
        medicalCheckup: "2021/02/06",
    },
    {
        id: 11,
        name: "矢野 大輔",
        gender: "男",
        dateOfBirth: "1980/05/28",
        myNumber: 18872191,
        hireDate: "2014/10/21",
        department: "食品課",
        charge: "日配",
        position: "主任",
        branch: "博多店",
        spouse: "無",
        children: 0,
        medicalCheckup: "2021/03/09",
    },
    {
        id: 12,
        name: "上田 桃子",
        gender: "女",
        dateOfBirth: "1985/09/19",
        myNumber: 20952772,
        hireDate: "2017/05/05",
        department: "食品課",
        charge: "日配",
        position: "社員",
        branch: "博多店",
        spouse: "有",
        children: 3,
        medicalCheckup: "2021/06/17",
    },
    {
        id: 13,
        name: "佐藤 澄子",
        gender: "女",
        dateOfBirth: "1999/06/11",
        myNumber: 16362814,
        hireDate: "2001/03/16",
        department: "食品課",
        charge: "青果",
        position: "主任",
        branch: "博多店",
        spouse: "無",
        children: 0,
        medicalCheckup: "2021/06/29",
    },
    {
        id: 14,
        name: "平野 真弓",
        gender: "女",
        dateOfBirth: "2002/05/30",
        myNumber: 18599936,
        hireDate: "2019/08/17",
        department: "食品課",
        charge: "青果",
        position: "社員",
        branch: "博多店",
        spouse: "無",
        children: 0,
        medicalCheckup: "2021/06/10",
    },
];
var displayRelation = function (data) {
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var userinfo = data_1[_i];
        for (var key in userinfo) {
            var value = userinfo[key];
            console.log("".concat(key, ": ").concat(value, ", "));
        }
        console.log("\n");
    }
};
displayRelation(relation);
