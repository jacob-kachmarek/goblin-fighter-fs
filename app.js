/* Imports */

/* Get DOM Elements */
const playerHpEl = document.getElementById('player-hp');
const enemyInput = document.getElementById('enemy-input');
const enemyButton = document.getElementById('add-enemy-button');
const defeatedEnemiesEl = document.getElementById('defeated-enemies');

/* State */
let enemiesDefeated = 0;
let playerHp = 20;
const enemies = [
    { name: 'Sonny', hp: 5 },
    { name: 'Vito', hp: 7 },
];
/* Events */
enemyButton.addEventListener('click', () => {
    const enemyName = enemyInput.value;
    const addEnemy = {
        name: enemyName,
        hp: Math.ceil(Math.random() * 10),
    };
    enemies.push(addEnemy);
    enemyInput.value = '';
});
/* Display Functions */
function displayEnemies() {}
// (don't forget to call any display functions you want to run on page load!)
