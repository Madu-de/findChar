const input: string = "HIER DEN STRING INDEM DER CHAR GESUCHT WERDEN SOLL!";
const suche: string = "HIER DER CHAR, DER GESUCHT WIRD";
console.log(seekChar(input, suche));

function seekChar(input: string, suche: string): string {
    for (let i = 0; i < input.length; i++) {
        const element = input.charAt(i);

        if (element === suche) {
            return `Der gesuchte Char(${suche}) ist an Stelle ${i + 1}.`;
        }

    }
    return `Der gesuche Char(${suche}) wurde nicht gefunden.`;
} 
