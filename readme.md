M1
-con un v-for ricreo tutte le immagini presenti nell'oggetto
-assegno alle img dentro item un "display:none" nel css e creo una classe "active-item:dispaly-block" che assegnerò solo all'elemento con indice 0
-nel js creo una variabile "star:0" che mi servirà come condizione nella funzione "firstActive()" ,quella utilizzata per assegnare la classe "active-item"

M2
-con lo stesso sistema utilizzato per item in M1 ricreo la thumbnail e utilizzo la classe "active" invece della classe "active-item",quindi ricreo una funzione identica alla precedente

M3
-aggiunti event handler per le frecce di navigazione,creando delle funzioni apposite che utlizzano la variabile che ogni volta si salva l'immaggine attiva come riferimento

BONUS
-aggiunta funzione per il click sulla thumb,passando l'indice come argomento della funzione che verrà assegnato come valore alla variabile slideActive

-aggiunto timer all'avvio 

-con @mouseenter e @mouseleave gestisco il timer con l'hover delle thumb