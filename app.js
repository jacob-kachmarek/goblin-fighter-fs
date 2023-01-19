/* Imports */
import { renderEnemy } from './utils.js';
/* Get DOM Elements */
const playerHpEl = document.getElementById('player-hp');
const enemyInput = document.getElementById('enemy-input');
const enemyButton = document.getElementById('add-enemy-button');
const defeatedEnemiesEl = document.getElementById('defeated-enemies');
const enemyEl = document.getElementById('enemies');

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
    displayEnemies();
});
/* Display Functions */
function displayEnemies() {
    enemyEl.textContent = '';
    for (let enemy of enemies) {
        const addEnemyEl = renderEnemy(enemy, playerHp);
        addEnemyEl.addEventListener('click', () => {
            if (playerHp <= 0) {
                alert('You have been iced');
                return;
            }
            if (Math.random() > 0.2) {
                alert('You have injured ' + enemy.name);
                enemy.hp--;
                if (enemy.hp === 0) {
                    defeatedEnemiesEl.textContent = `${enemiesDefeated}`;
                    alert(enemy.name + ' sleeps with the fishes.');
                    enemiesDefeated++;
                }
            } else {
                alert('you missed ' + enemy.name);
            }

            if (Math.random() > 0.7) {
                alert(enemy.name + ' Shot back and hit!');
                playerHp--;
            } else {
                alert(enemy.name + ' Shot back and missed');
            }
            playerHpEl.textContent = playerHp;
            displayEnemies();
        });
        enemyEl.append(addEnemyEl);
    }
}
displayEnemies();

// (don't forget to call any display functions you want to run on page load!)
