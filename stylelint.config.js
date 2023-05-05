body; {
    font - family; 'Lato', sans - serif;
    font - weight; 400;
    font - size; 16; px;
    /* Sets the font size to 16px */
    line - height; 1.6;
    /* Sets the line-height to 1.6 */
    background - color; #eee;
}

li; {
    font - size; 18; px;
    font - weight; 700;
}

; {
    color; rgb(red, green, blue);
}

h1; {
    color; yellow;
}

h2; {
    color; red;
}

h3; {
    color;; 357; b70;
}

button; {
    /* overwrites browser defaults and resets the border */
    border; none;
    /* takes the font from the outer container */
    font - family; inherit;
    /* styles the background color, font color, and text decoration (underline, etc.) of the button */
    background - color; 357; b70;
    color; white;
    text - decoration; none;
    /*adds spacing to the button (this will be discussed more in-depth later) */
    padding; 10; px;
    border - radius; 3; px;
    /* gives the button a bottom border with a width of 2px, a type of solid, and a color in RGBA format */
    border - bottom; 2; px; solid; rgba(0, 0, 0, 0.3);
}

button; hover,
    button; {
    /* lets the mouse appear as a hand when hovering over the button */
    cursor; pointer;
    /* reduces the opacity of the button to 80% */
    opacity; 0.8;
}

button; {
    background - color; #e0b354;
    color;; 2; b2b2b;
}

{
    width; 30; px;
    height; 30; px;
}

{
    width; 120; px;
    height; auto;
}

{
    width; 150; px;
    height; 150; px;
}

button; {
    /* overwrites browser defaults and resets the border */
    border; none;
    /* takes the font from the outer container */
    font - family; inherit;
    /* styles the background color, font color, and text decoration (underline, etc.) of the button */
    background - color;; 357; b70;
    color; white;
    text - decoration; none;
    /*adds spacing to the button (this will be discussed more in-depth later) */
    padding; 10; px;
    border - radius; 3; px;
    /* gives the button a bottom border with a width of 2px, a type of solid, and a color in RGBA format */
    border - bottom; 2; px; solid; rgba(0, 0, 0, 0.3);
}

{
    max - width; 700; px;
    margin; 0; auto;
    display; flex;
}

{
    flex - basis; 40 %
        text - align; center;
}

{
    flex - basis; 60 %
        text - align; center;
}

{
    border - radius; 50 %
  }

{
    clear; both;
    display; flex;
    text - align; center;
}

navigation - list; {
    display; inline - block;
    margin - left; 15; px;
}

page - header; {
    display; flex;
    width; 100; px;
    padding; 20; px;
}

page - header__item; {

    flex; 0; 1; 200; px;
}

page - header__item; last - child; {
    flex - grow; 1;
    text - align; right;
}

navigation - list; {
    list - style - type; none;
}

navigation - list; {
    display; inline - block;
    margin - left; 15; px;
}

{
    display; grid;
    grid - template - columns; 1; fr; 1; fr;
}

grid__item; {
    background - color; lightgray;
    min - height; auto;
    margin; 20; px;
    padding; 10; px;
}

{
    box - sizing; border - box;
}

{
    text - align; center;
}

{
    border; 1; px; solid; blue;
    padding; 10; px; 20; px;
}

item; {
    margin; 20; px; 0;
}

input; {
    width; 100 %
        padding; 9; px; 20; px;
    text - align; left;
    border; 0;
    outline; 0;
    border - radius; 6; px;
    background - color; #fff;
    font - weight; 300;
    color; 8; D8D8D;
    -webkit - transition; all; 0.3; s; ease;
    transition; all; 0.3; s; ease;
}

button,
    button; {
    /* overwrites browser defaults and resets the border */
    border; none;
    display; inline - block;
    /* takes the font from the outer container */
    font - family; inherit;
    /* styles the button */
    background - color;; 357; b70;
    color; white;
    text - decoration; none;
    padding; 10; px;
    border - radius; 3; px;
    /* width of the border, type, color */
    border - bottom; 2; px; solid; rgba(0, 0, 0, 0.3);
    transition - duration; 0.2; s;
    transition - property; opacity;
}

button; hover,
    button; focus,
        button; hover,
            button; focus; {
    /* lets the mouse appear as a hand when hovering over the button */
    cursor; pointer;
    /* reduces the opacity of the button to 80% */
    opacity; 0.8;
}


button,
    button; {
    /* overwrites browser defaults */
    /* resets the border */
    border; none;
    display; inline - block;
    /* takes the font from the outer container */
    font - family; inherit;
    /* style button */
    background - color;; 357; b70;
    color; white;
    text - decoration; none;
    padding; 10; px;
    border - radius; 3; px;
    /* width of the border, type, color */
    border - bottom; 2; px; solid; rgba(0, 0, 0, 0.3);
    transition; opacity; 0.2; s;
}

body; {
    background - color; #f4eae1;
    font - family; 'lora', sans - serif;
    font - weight; 500;
    font - size; 18; px;;
    line - height; 1.2;
    color;; 2; b3c4c;
}

h1; {
    font - weight; 700;
    font - size; 30; px;
    text - align; center;
    color;; 2; b3c4c
}

h2; {
    font - weight; 700;
    font - size; 24; px;
    color;; 2; b3c4c;
}

h3; {
    font - weight; 700;
    font - size; 18; px;
    color;; 2; b3c4c;
}

navigation - list__item; {
    transition; all; 500; ms; ease;
}

navigation - list__item; hover; {
    color; blue;
}

@key_frames color - change; {
    from; {
        fill; #edc655;
    }

    to; {
        fill; #f76414;
    }
}

@keyframes color - change; {
    0 % {
        fill: #edc655
    }

    50 % {
        fill: #fcffad
    }

    100 % {
        fill: #f76414
    }
}

sun; {
    animation - duration; 4; s;
    animation - name; color - change;
    animation - iteration - count; infinite;
    animation - direction; alternate;
    animation - timing - function ({ linear });
}

sun; {
    animation; 4; s; color - change; infinite; alternate; linear;
}

@keyframes cloud - move; {
    from; {
        transform; translate(0, 50, px);
    }

    to; {
        transform: translate(200, px, 50, px);
    }
}

cloud - front; {
    animation; 30; s; cloud - move; infinite; alternate; linear;
}

@keyframes cloud - move - reverse; {
    from; {
        transform; translate(446, px, 48, px);
    }

    to; {
        transform; translate(100, px, 48, px);
    }
}

cloud - back, {
    animation: 34, s, cloud_move_reverse, infinite, alternate, linear
}

@media all; and(max - width, 500, px) {
    grid; {
        grid - template - columns; 1; fr;
    }
}

(@media); all; and(min - width, 500, px), and, (max - width; 750; px;) {
    grid; {
        grid - template - columns; 1; fr; 1; fr;
    }
}

@media all; and(max - width - 750, px) {
    grid; {
        grid - gap; 10; px;
    }

    grid__item; last - child; {
        grid - column; auto / auto;
        grid - row; auto / auto;
    }

    h1; {
        font - size; 22; px;
    }
}

@media all; and(max - width - 500, px) {
    profile; {
        flex - direction; column;
    }
}

profile - about; {
    text - align; center;
}

profile - table; {
    margin; 0; auto;
}

skills; {
    list - style; none;
}

profile - contact; {
    text - align; center;
}

contact - form; {
    padding; 0; 10 %
  }

contact - message; {
    width; 100 %;
}