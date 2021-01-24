import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faPlusSquare,
    faTrash,
    faChess,
    faExternalLinkSquareAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusSquare, faTrash, faChess, faExternalLinkSquareAlt);

Vue.component("font-awesome-icon", FontAwesomeIcon);
