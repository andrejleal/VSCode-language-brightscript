/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
define(["require", "exports", './brightscriptDef', 'monaco'], function (require, exports, languageDef, monaco) {
    monaco.Modes.registerMonarchDefinition('brightscript', languageDef.language);
    var InplaceReplaceSupport = monaco.Modes.InplaceReplaceSupport;
    var modifiersArr = ['Private', 'Public', 'Friend', 'ReadOnly', 'Partial', 'Protected', 'WriteOnly'];
    var valueSets = ['True', 'False'];
    InplaceReplaceSupport.register('brightscript', InplaceReplaceSupport.create({
        textReplace: function (value, up) {
            return InplaceReplaceSupport.valueSetsReplace([modifiersArr, valueSets], value, up);
        }
    }));
});
//# sourceMappingURL=vbMain.js.map