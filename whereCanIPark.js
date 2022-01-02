const whereCanIPark = function (spots, vehicle) {
  // Code here!
let spot, count = 0;
let v = vehicle.charAt(0);
for (let y = 0; y < spots.length; y++){
	for (let x=0; x < spots.length; x++){
		if(spots[y][x] === v.toUpperCase() && count < 1){
			spot = {y, x};
			count++;
		}else if (spots[y][x] === 'R' && v.toUpperCase() === 'S' && count < 1){
			spot = {y, x};
			count++;
		}else if (spots[y][x] ==='S' && v.toUpperCase() === 'M' && count < 1 || spots[y][x] === 'R' && v.toUpperCase() === 'M' && count < 1){
			spot = {y, x};
			count++;
		}
	}
}
if (spot == undefined){
return false;
}
return spot;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
