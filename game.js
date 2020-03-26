//create board
var board = [];

// for (var a = 0; a < 9; a++) {
//   var mini = [];
//   while (mini.length < 9) {
//       num = Math.floor((Math.random() * 9) + 1);
//       if (!mini.includes(num)) {
//         mini.push(num);
//     }
//   }
//   var line = [];
//   for (var b = 0; b < 3; b++) {
//     var arr = mini.splice(0,3);
//     line.push(arr);
//   }
//   board.push(line);
// }


for (var a = 0; a < 9; a++) {
  var row = [];
  while (row.length < 9) {
    num = Math.floor((Math.random() * 9) + 1);
    if (!row.includes(num)) {
           row.push(num);
    }
  }
  board.push(row);
}

//find columns
var columns = [];
  for (var g = 0; g < 9; g++) {
    var line = [];
    for (var h = 0; h < 9; h++) {
      line.push(board[h][g]);
    }
    columns.push(line);
  }

//find duplicates in columns

for (var b = 0; b < 9; b++) {
  var errors = [];
  for (var c = 0; c < 9; c++) {
    if (!errors.includes(columns[b][c])) {
      errors.push(columns[b][c]);
    } else {
      errors.push('x');
    }
  }


//find missing numbers
var missing = [];
  for (var e = 1; e < 10; e++) {
    if (!columns[b].includes(e)) {
      missing.push(e);
    }
  }
//correct columns
  for (var i = 0; i < 9; i++) {
    if (errors[i] == 'x') {
      for (k = b; k < 9; k++) {
        if (missing.includes(board[i][k])) {
          var num = board[i][b];
          var num2 = board[i][k];
          board[i][k] = num;
          board[i][b] = num2;
          var thing = missing.indexOf(num2);
          var remove = missing.splice(thing,1);
        }
      }
    }
  }
}
console.log(board);
console.log(columns);

// //assign html info
// var text1 = "<table> <tr>"
// for (var a = 0; a < 3; a++) {
//   text1 += "<td><table> <tr><td class='outside'>"
//   for (var b = 0; b < 3; b++) {
//     text1 += "<table><tr>"
//     for (var c = 0; c < 3; c++) {
//       text1 += "<td class='inside'>" + board[a][b][c] + "</td>"
//     }
//     text1 += "</tr> </table>"
//   }
//   text1 += "</td></tr> </table>"
// }
// text1+="</td></tr> </table>"
//
// var text2 = "<table> <tr>"
// for (var a = 3; a < 6; a++) {
//   text2 += "<td><table> <tr><td class='outside'>"
//   for (var b = 0; b < 3; b++) {
//     text2 += "<table><tr>"
//     for (var c = 0; c < 3; c++) {
//       text2 += "<td class='inside'>" + board[a][b][c] + "</td>"
//     }
//     text2 += "</tr> </table>"
//   }
//   text2 += "</td></tr> </table>"
// }
// text2+="</td></tr> </table>"
//
// var text3 = "<table> <tr>"
// for (var a = 6; a < 9; a++) {
//   text3 += "<td><table> <tr><td class='outside'>"
//   for (var b = 0; b < 3; b++) {
//     text3 += "<table><tr>"
//     for (var c = 0; c < 3; c++) {
//       text3 += "<td class='inside'>" + board[a][b][c] + "</td>"
//     }
//     text3 += "</tr> </table>"
//   }
//   text3 += "</td></tr> </table>"
// }
// text3+="</td></tr> </table>"
//
//
// let text1p = document.getElementById('board')
//   text1p.innerHTML = text1;
// let text2p = document.getElementById('board2')
//   text2p.innerHTML = text2;
// let text3p = document.getElementById('board3')
//   text3p.innerHTML = text3;
