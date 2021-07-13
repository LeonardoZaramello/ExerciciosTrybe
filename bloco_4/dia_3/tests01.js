var fullSign = '*';
var emptySign = 'a';
var newRowSign = '*';

    function mixedTriangle (n) {
        for (var row = 1; row <= n; row++) {
            
              for (var col = n; col > 0; col--) {
                if(col <= row)
                    document.write(fullSign);
                else
                    document.write(emptySign);
            }
        }
    }

    mixedTriangle(5);