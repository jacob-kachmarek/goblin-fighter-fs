/* Imports */

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
        const addEnemyEl = renderEnemy(enemy);
        addEnemyEl.addEventListener('click', () => {
            if (playerHp <= 0) {
                alert('You have been iced');
                return;
            }
            if (Math.random() > 0.2) {
                alert('You have injured' + enemy.name);
                enemy.hp--;
                if (enemy.hp === 0) {
                    enemiesDefeated++;
                    defeatedEnemiesEl.textContent = `${enemiesDefeated}`;
                }
            } else {
                alert('you missed ' + enemy.name);
            }

            if (Math.random() > 0.7) {
                alert(enemy.name + 'Shot back and hit!');
                playerHp--;
            } else {
                alert(enemy.name + 'Shot back and missed');
            }
            playerHpEl.textContent = playerHp;
            displayEnemies();
        });
        enemyEl.append(addEnemyEl);
    }
}
displayEnemies();

function renderEnemy(dataEnemy) {
    const newEnemyEl = document.createElement('li');
    const nameEl = document.createElement('p');
    const symbolEl = document.createElement('p');
    const enemyHpEl = document.createElement('p');

    nameEl.textContent = 'Name: ' + dataEnemy.name;
    enemyHpEl.textContent = 'HP: ' + dataEnemy.hp;

    if (dataEnemy.hp > 0) {
        symbolEl.textContent = '🎩';
    } else {
        symbolEl.textContent = '🩸';
    }

    newEnemyEl.classList.add('enemy');
    newEnemyEl.append(nameEl, symbolEl, enemyHpEl);
    return newEnemyEl;
}

// (don't forget to call any display functions you want to run on page load!)
