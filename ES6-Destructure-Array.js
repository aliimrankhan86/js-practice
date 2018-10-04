var details = ['Ali Khan', 324, 'aliimrankhan86@googlemail.com'];
        var [name, id, email] = details;
        console.log(name, id, email);
        /* Above is simple Array destructure example */

        var cricketData = 'M-Amir, 4-30, Oval, against india';
        console.log(cricketData.split(','));
        var [bowler, performance, venue, opposition] = cricketData.split(',');
        console.log(bowler, performance, venue, opposition);
        /* Basically it take values from index of the array and assign it to the const based on the index */



        const team = ['Ali', 'Nazish', 'Anaya', 'Aizah', 'Mustafa'];
        const [captain, assistant, ...kids] = team;
        /* Ali is defined first so the first index based const will be ali meaning captain = ali 
        then assistant is second in index so assistant will become nazish and
        ...kids meaning rest operator ... then name of the const you want to use will keep all the remaining values */
