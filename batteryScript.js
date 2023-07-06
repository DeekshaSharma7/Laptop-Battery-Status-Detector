const battery = document.querySelector('#batteryStatus');
let batteryPromise = navigator.getBattery();
batteryPromise.then(batteryFunction);

function batteryFunction(batteryObject) {
    BatteryStatus(batteryObject);
    setInterval(() => {
        BatteryStatus(batteryObject);
    }, 2000);
}

function BatteryStatus(batteryObject){
    battery.textContent = `${batteryObject.level * 100}%`;
    if(batteryObject.charging == true) {
        battery.textContent = `${batteryObject.level * 100}%`;
    }
    if (batteryObject.charging == false){
        battery.textContent = `${batteryObject.level * 100}%`;
    }
    let batteryPercentage = parseInt(battery.textContent);
    console.log(batteryPercentage);

    const batteryContainer = document.getElementById('batter-per');
    batteryContainer.style.width = batteryPercentage;

    let newNum =`${newNUm[0]}${newNum[1]}`
    batteryContainer.style.width = newNum;
}