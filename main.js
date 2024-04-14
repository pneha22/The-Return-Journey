<script>
    document.querySelector('button').addEventListener('click', function() {
        const hobbies = document.querySelectorAll('input[type="checkbox"]:checked');
        const selectedHobbies = Array.from(hobbies).map(hobby => hobby.value);

        const selectedClub = document.getElementById('clubs').value;
        const destination = document.getElementById('destination').value;
        const companion = document.getElementById('companion').value;

        console.log('Selected Hobbies:', selectedHobbies);
        console.log('Selected Club:', selectedClub);
        console.log('Destination:', destination);
        console.log('Companion:', companion);
    });
</script>
