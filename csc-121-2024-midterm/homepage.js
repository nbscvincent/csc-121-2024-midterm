document.querySelector('button').addEventListener('click', function(e) {
    var form = document.querySelector('form'),
        list = document.getElementById('list');
        
        [].forEach.call(form.querySelectorAll('input'), function(el) {
        var listItem = document.createElement('li');
        listItem.textContent = el.value;
        
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            list.removeChild(listItem);
        });
        
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
});