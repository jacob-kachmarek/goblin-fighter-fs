export function renderEnemy(dataEnemy, playerHp) {
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
    if (playerHp <= 0) {
        newEnemyEl.disabled = true;
    }

    if (dataEnemy.hp === 0) {
        hideDead();
    }

    function hideDead() {
        newEnemyEl.classList.add('hide');
    }
    newEnemyEl.classList.add('enemy');
    newEnemyEl.append(nameEl, symbolEl, enemyHpEl);
    return newEnemyEl;
}

export function hideDead() {
    newEnemyEl.classList.add('hide');
}
