/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var numberofTriangles = 0; //Количество треугольников
    for (var i = 0; i < preferences.length; i++) {
        var triangle = getTriangles(preferences, i + 1);//Получение треугольника
        if ((triangle[0] === triangle[triangle.length - 1] && (triangle[1]) !== triangle[triangle.length - 1])) {
          numberofTriangles++;//Проверка замкнутости и не закрученности на одной цифре
        }
    }
    return numberofTriangles / 3;//Т.к. каждый треугольник повторяется по 3 раза(1 из каждой входящей цифры)
  };

  function getTriangles(preferences, startIndex) {
     var index = 1, value = -1;
     var Trianglestate = [];//Массив состояний треугольника, который состоит из четырёх чисел
     var j = 0;
     index = startIndex;//Стартовый индекс для проверки замкнут/не замкнут
     for (j = 0; j < 2; j++) {
       Trianglestate.push(index);
       value = preferences[index - 1];//Значение по индексу
       Trianglestate.push(value);
       index = preferences[value - 1];//Новая позиция
     }
     return Trianglestate;
  }
