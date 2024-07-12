import lookUpTable_main from "./design/condition";
import FacotryPatternMain from "./design/factory";
import Prototype from "./design/prototype"
import proxy_main from "./design/proxy";
import singleton_main from "./design/singletone";
import regex_main from "./regex/main";

function main()
{
    // Prototype();
    // singleton_main();
    // FacotryPatternMain();
    // proxy_main();
    console.clear();
    console.time("design");
    // lookUpTable_main();
    regex_main();
    console.timeEnd("design");
}

main();

