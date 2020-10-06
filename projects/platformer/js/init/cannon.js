(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    
     */ 
    function init(game) {
        let createCannon = cannon.create;
        
        
    
        createCannon("top", 450);
        createCannon("top", "right", 450)
        createCannon("top","left", 450)
        
        
       
    };
    cannon.init = init;
})(window);
