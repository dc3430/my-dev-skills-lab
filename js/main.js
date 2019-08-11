
$('#submit').on('click', function(e) {
    $('ul').append($('<li>' + $('#newSkill').val() + '</li>'))
})


// $('#submit').on('click', function(evt){
//     console.log(evt);
// })


// $('submit').on(function(e){
//     e.preventDefault();
//     let newSkill = $('#newSkill').val();
//     console.log('newSkill')
// })


//variables
// let mySkillsList  = ('.t')

//eventlistner
//document.getElementById('newSkill').addEventListener('click', addInput)

//cache element
// document.querySelector('input').$('.t')

// function
// function render() {
//     addInput()
// }

// function addInput() {
//     document.querySelector('input').$('.t')
// }

//jquery
// var mySkills = [];
// var mySkillsList = $( "#mySkillsList" );
 
// for ( var i = 0; i < 100; i++ ) {
//     mySkills.push( "<li>item " + i + "</li>" );
// }
 
// mySkillsList.append( mySkils.join( "" ) );