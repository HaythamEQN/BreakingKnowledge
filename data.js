const jsonData = [
  { "id": 1, "name":  "Andrea",               "season": "3-4"  },
  { "id": 2, "name":  "Badger",               "season": "1-3-4-5"  },
  { "id": 3, "name":  "Bogdan",               "season": "1"  },
  { "id": 4, "name":  "Clovis",               "season": "2"  },
  { "id": 5, "name":  "Combo",                "season": "1"  },
  { "id": 6, "name":  "Dan Wachsberger",      "season": "5"  },
  { "id": 7, "name":  "Declan",               "season": "5"  },
  { "id": 8, "name":  "Dennis Markowsky",     "season": "5"  },
  { "id": 9, "name":  "Don Eladio",           "season": "4"  },
  { "id": 10, "name": "Donald",               "season": "2"  },
  { "id": 11, "name": "Gale",                 "season": "3"  },
  { "id": 12, "name": "Gaff",                 "season": "4"  },
  { "id": 13, "name": "Gretchen And Man",     "season": "2-5"  },
  { "id": 14, "name": "Gus",                  "season": "2-3-4"  },
  { "id": 15, "name": "Hank Schrader",        "season": "1-2-3-4-5"  },
  { "id": 16, "name": "Hector",               "season": "2-4"  },
  { "id": 17, "name": "Holly White",          "season": "2-3-4-5"  },
  { "id": 18, "name": "Huell",                "season": "4-5"  },
  { "id": 19, "name": "Jane",                 "season": "2"  },
  { "id": 20, "name": "Jesse Pinkman",        "season": "1-2-3-4-5"  },
  { "id": 21, "name": "Jesse Parents",        "season": "1"  },
  { "id": 22, "name": "Juan Bolsa",           "season": "3"  },
  { "id": 23, "name": "Krazy8",               "season": "1"  },
  { "id": 24, "name": "Lydia Rodarte-Quayle", "season": "5"  },
  { "id": 25, "name": "Marie Schrader",       "season": "1-2-3-4-5"  },
  { "id": 26, "name": "Merkert",              "season": "3"  },
  { "id": 27, "name": "Mike",                 "season": "2-3-4-5"  },
  { "id": 28, "name": "Old Joe",              "season": "3"  },
  { "id": 29, "name": "Patrick Kuby",         "season": "4-5"  },
  { "id": 30, "name": "Pete",                 "season": "2-3-4-5"  },
  { "id": 31, "name": "Principal",            "season": "3"  },
  { "id": 32, "name": "Saul Goodman",         "season": "2-3-4-5"  },
  { "id": 33, "name": "Skyler White",         "season": "1-2-3-4-5"  },
  { "id": 34, "name": "Steven Gomez",         "season": "1-2-3-4-5"  },
  { "id": 35, "name": "The Twins",            "season": "3"  },
  { "id": 36, "name": "Ted",                  "season": "2"  },
  { "id": 37, "name": "Tuco Salamanca",       "season": "1"  },
  { "id": 38, "name": "Tyruss Kitt",          "season": "4"  },
  { "id": 39, "name": "Victor",               "season": "2-3-4"  },
  { "id": 40, "name": "Walter White",         "season": "1-2-3-4-5"  },
  { "id": 41, "name": "Lawson ",              "season": "5"  },
  { "id": 42, "name": "kenny",                "season": "5"  },
  { "id": 43, "name": "Todd Alquist",         "season": "5"  },
  { "id": 44, "name": " Jack Welker",         "season": "5"  },
  { "id": 45, "name": "Emilio",               "season": "1"  },
  { "id": 46, "name": "Group leader",         "season": "3"  },
  


];
const table = document.getElementById('data-table');
const tbody = table.getElementsByTagName('tbody')[0];

jsonData.forEach((item) => {
    const row = tbody.insertRow();
    const idCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const seasonCell = row.insertCell(2);

    idCell.innerHTML = item.id;
    nameCell.innerHTML = item.name;
    seasonCell.innerHTML = item.season;
});