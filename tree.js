
    "use strict";

    var antlr4 = require("antlr4/index");
    var PlSqlLexer = require("./PlSqlLexer");
    var PlSqlParser = require("./PlSqlParser");
    var PlSqlParserListener = require("./PlSqlParserListener");

    var ProcSQL = function() {
        PlSqlParserListener.PlSqlParserListener.call(this);
        return (this);
    }

    ProcSQL.prototype = Object.create(PlSqlParserListener.PlSqlParserListener.prototype);
    ProcSQL.prototype.constructor = ProcSQL;

    ProcSQL.prototype.enterSelect_statement = function(ctx) {
        console.log(ctx);
        // others not supported yet
        assert(ctx.children.length == 1 && 
            ctx.children[0].constructor.name == "SubqueryContext");

        // root of the op tree
        createOpNodeCommonProc(NodeType.NOOP);
    }

    ProcSQL.prototype.exitSelect_statement = function(ctx) {
        exitCommonProc();

        assert(currentOpNodeIndex == 0);
        simplifyOpTree();
        compactOpTree();

        console.log(opArray);
        console.log(newOpArray);
    }

    ProcSQL.prototype.enterSubquery = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1 && 
            ctx.children[0].constructor.name == "Subquery_basic_elementsContext");
        console.log(ctx);
    }

    ProcSQL.prototype.exitSubquery = function(ctx) {
        console.log(opArray);
    }

    ProcSQL.prototype.enterSubquery_basic_elements = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1 && 
            ctx.children[0].constructor.name == "Query_blockContext");
        console.log(ctx);
    }

    ProcSQL.prototype.exitSubquery_basic_elements = function(ctx) {
        console.log(opArray);
    }

    ProcSQL.prototype.enterQuery_block = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        assert(ctx.children[0].getText() == "SELECT");

        // check DISTINCT
        if (!(ctx.children[1].constructor.name == "Selected_elementContext")) {
            if (ctx.children[1].getText() == "DISTINCT") {
                createOpNodeCommonProc(NodeType.PROJ_DISTINCT);
            }
            else if (ctx.children[1].getText() == "*") {
                createOpNodeCommonProc(NodeType.PROJ);
            }
            else {
                // others not supported yet
                assert(false);
            }
        }
        else {
            createOpNodeCommonProc(NodeType.PROJ);
        }

    }

    ProcSQL.prototype.exitQuery_block = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }
    
    ProcSQL.prototype.enterSelected_element = function(ctx) {
        console.log(ctx);
        console.log(currentOpNodeIndex);
        console.log(opArray);

        assert(opArray[currentOpNodeIndex].type_ == NodeType.PROJ ||
            opArray[currentOpNodeIndex].type_ == NodeType.PROJ_DISTINCT);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 2) {
            createOpNodeCommonProc(NodeType.RENAME_ATTRIBUTE);
        }
        else if (ctx.children.length == 1) {
            assert(ctx.children[0].constructor.name == "Select_list_elementsContext");
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitSelected_element = function(ctx) {
        // PROJ parameters
        exitChildren2CommonProc();

        console.log(opArray);

        assert(opArray[currentOpNodeIndex].type_ == NodeType.PROJ ||
            opArray[currentOpNodeIndex].type_ == NodeType.PROJ_DISTINCT);
    }

    ProcSQL.prototype.enterSelect_list_elements = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 3) {
             if (ctx.children[1].getText() == "." &&
                ctx.children[0].constructor.name == "Regular_idContext") {
                
                createOpNodeCommonProc(NodeType.QUALIFY);
            }
            else { 
                // not supported for now
                assert(false);
            }
        }
        else if (ctx.children.length == 1) {
            assert(ctx.children[0].constructor.name == "ExpressionContext");
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitSelect_list_elements = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    ProcSQL.prototype.enterFrom_clause = function(ctx) {
        // assert(ctx.children[0].getText() == "FROM");
        console.log(ctx);
    }
    
    ProcSQL.prototype.exitFrom_clause = function(ctx) {
        console.log(opArray);
    }

    ProcSQL.prototype.enterTable_ref_list = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        createOpNodeCommonProc(NodeType.JOIN_CROSS_COMMA);

        assert(ctx.children[0].constructor.name == "Table_refContext");
    }

    ProcSQL.prototype.exitTable_ref_list = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    ProcSQL.prototype.enterTable_ref = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length > 1) {
            // others not supported yet
            assert(ctx.children[ctx.children.length - 1].constructor.name == "Join_clauseContext");

            createOpNodeCommonProc(NodeType.JOIN); // type of join may change later
        }
        else if (ctx.children.length == 1) {
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitTable_ref = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }
   
    ProcSQL.prototype.enterTable_ref_aux = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 2) {
            // others not supported yet
            assert(ctx.children[1].constructor.name == "Table_aliasContext");

            createOpNodeCommonProc(NodeType.RENAME_TABLE); 
        }
        else if (ctx.children.length == 1) {
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            // others not supported yet
            assert(false);
        }
    }
    
    ProcSQL.prototype.exitTable_ref_aux = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    ProcSQL.prototype.enterJoin_clause = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 4) {
            if (ctx.children[0].constructor.name == "Outer_join_typeContext") {
                createOpNodeCommonProc(NodeType.PLACE_HOLDER); 
            }
            else {
                // others not supported yet
                assert(false);
            }
        }
        else if (ctx.children.length == 3) {
            // others not supported yet
            assert(ctx.children[2].constructor.name == "Join_on_partContext");

            createOpNodeCommonProc(NodeType.JOIN_INNER);
        }
        else {
            // others not supported yet
            assert(false);
        }
    }
    
    ProcSQL.prototype.exitJoin_clause = function(ctx) {
        if (opNodeIndexStack.length > 0) {
            var pIdx = opNodeIndexStack.pop();
            assert(opArray[pIdx].type_ == NodeType.JOIN);
            assert(opArray[currentOpNodeIndex].type_ == NodeType.JOIN_INNER ||
                opArray[currentOpNodeIndex].type_ == NodeType.JOIN_LEFT ||
                opArray[currentOpNodeIndex].type_ == NodeType.JOIN_RIGHT ||
                opArray[currentOpNodeIndex].type_ == NodeType.JOIN_FULL ||
                opArray[currentOpNodeIndex].type_ == NodeType.JOIN_CROSS ||
                opArray[currentOpNodeIndex].type_ == NodeType.JOIN_NATURAL); 
            // link
            opArray[pIdx].children_.push(currentOpNodeIndex);
            opArray[currentOpNodeIndex].parent_ = pIdx;

            if (opArray[pIdx].type_ == NodeType.JOIN ||
                opArray[pIdx].type_ == NodeType.JOIN_LEFT ||
                opArray[pIdx].type_ == NodeType.JOIN_RIGHT ||
                opArray[pIdx].type_ == NodeType.JOIN_FULL) {
                
                assert(opArray[currentOpNodeIndex].children2_.length == 1 &&
                    opArray[pIdx].children2_.length == 0);
                // add parameters 
                // opArray[pIdx].children2_.push(opArray[currentOpNodeIndex].children2_[0]);
                // opArray[currentOpNodeIndex].children2_.pop();
            }

            currentOpNodeIndex = pIdx;
        }

        console.log(opArray);
    }

    ProcSQL.prototype.enterOuter_join_type = function(ctx) {
        console.log(ctx);

        assert(opArray[currentOpNodeIndex].type_ == NodeType.PLACE_HOLDER);
        
        if (ctx.children[0].getText() == "LEFT") {
            opArray[currentOpNodeIndex].type_ = NodeType.JOIN_LEFT;
        }
        else if (ctx.children[0].getText() == "RIGHT") {
            opArray[currentOpNodeIndex].type_ = NodeType.JOIN_RIGHT;
        }
        else if (ctx.children[0].getText() == "FULL") {
            opArray[currentOpNodeIndex].type_ = NodeType.JOIN_FULL;
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.enterJoin_on_part = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 2) {
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            // others not supported yet
            assert(false);
        }
    }

    ProcSQL.prototype.exitJoin_on_part = function(ctx) {
        // JOIN parameters
        exitChildren2CommonProc();

        console.log(opArray);

        assert(opArray[currentOpNodeIndex].type_ == NodeType.JOIN_INNER ||
            opArray[currentOpNodeIndex].type_ == NodeType.JOIN_LEFT ||
            opArray[currentOpNodeIndex].type_ == NodeType.JOIN_RIGHT ||
            opArray[currentOpNodeIndex].type_ == NodeType.JOIN_FULL ||
            opArray[currentOpNodeIndex].type_ == NodeType.JOIN_CROSS ||
            opArray[currentOpNodeIndex].type_ == NodeType.JOIN_NATURAL); 
    }

    ProcSQL.prototype.enterCondition = function(ctx) {
        console.log(ctx);
    }

    ProcSQL.prototype.exitCondition = function(ctx) {
        console.log(opArray);
    }

    ProcSQL.prototype.enterTable_ref_aux_internal = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 3) {
            // others not supported yet
            assert(ctx.children[1].constructor.name == "Table_refContext");

            createOpNodeCommonProc(NodeType.NOOP); 
        }
        else if (ctx.children.length == 1) {
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            // others not supported yet
            assert(false);
        }
    }
    
    ProcSQL.prototype.exitTable_ref_aux_internal = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    ProcSQL.prototype.enterDml_table_expression_clause = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1 &&
            ctx.children[0].constructor.name == "Tableview_nameContext");

        console.log(ctx);
    }
    
    ProcSQL.prototype.exitDml_table_expression_clause = function(ctx) {
        console.log(opArray);
    }

    ProcSQL.prototype.enterTableview_name = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 1) {
            createOpNodeCommonProc(NodeType.TABLE_NAME); 
        }
        else {
            // others not supported yet
            assert(false);
        }
    }
    
    ProcSQL.prototype.exitTableview_name = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    ProcSQL.prototype.enterIdentifier = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1);

        console.log(ctx);
    }
    
    ProcSQL.prototype.exitIdentifier = function(ctx) {
        console.log(opArray);
    }

    ProcSQL.prototype.enterId_expression = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1 &&
            ctx.children[0].constructor.name == "Regular_idContext");

        console.log(ctx);
    }
    
    ProcSQL.prototype.enterWhere_clause = function(ctx) {
        console.log(ctx);

        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 4) {
            // others not supported yet
            assert(false);
        }
        else if (ctx.children.length == 2) {
            assert(ctx.children[1].constructor.name == "ExpressionContext");

            createOpNodeCommonProc(NodeType.SEL);
        }
        else {
            assert(false);
        }
    }
    
    ProcSQL.prototype.exitWhere_clause = function(ctx) {
        // manual links needed here

        // others not supported yet
        assert(ctx.children.length == 2);

        assert(opArray[currentOpNodeIndex].type_ == NodeType.SEL &&
            opArray[currentOpNodeIndex].children_.length == 1 &&
            opArray[currentOpNodeIndex].children2_.length == 0);
        
        // expression should be children2
        var eIdx = opArray[currentOpNodeIndex].children_.pop();
        opArray[currentOpNodeIndex].children2_.push(eIdx);

        // the parent node in the parse tree of where_clause is query_block
        // PROJ or PROJ_DISTINCT will become the parent of SEL when we exitQuery_block
        var selIdx = currentOpNodeIndex;
        assert(opNodeIndexStack.length > 0);
        currentOpNodeIndex = opNodeIndexStack.pop();
        assert((opArray[currentOpNodeIndex].type_ == NodeType.PROJ ||
            opArray[currentOpNodeIndex].type_ == NodeType.PROJ_DISTINCT) &&
            opArray[currentOpNodeIndex].children_.length == 1); 
        var cIdx = opArray[currentOpNodeIndex].children_.pop();
        opArray[selIdx].children_.push(cIdx);
        opArray[currentOpNodeIndex].children_.push(selIdx);

        console.log(opArray);
    }

    ProcSQL.prototype.exitId_expression = function(ctx) {
        console.log(opArray);
    }

    ProcSQL.prototype.enterExpression = function(ctx) {
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        assert(ctx.children.length == 1);

        createOpNodeCommonProc(NodeType.NOOP);
    }

    ProcSQL.prototype.exitExpression = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    ProcSQL.prototype.enterLogical_expression = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 3) {
            // console.log(ctx.children[1].getText());
            if (ctx.children[1].getText() == "OR") {
                // create op node 
                createOpNodeCommonProc(NodeType.OR);
            }
            else if (ctx.children[1].getText() == "AND") {
                // create op node 
                createOpNodeCommonProc(NodeType.AND);
            }
            else {
                // others not supported yet
                assert(false);
            }
        }
        else if (ctx.children.length == 2) {
            assert(ctx.children[0].getText() == "NOT");

            // create op node 
            createOpNodeCommonProc(NodeType.NOT);
        }
        else if (ctx.children.length == 1) {
            assert(ctx.children[0].constructor.name == "Multiset_expressionContext");

            // create op node 
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            assert(false); 
        }
    }

    ProcSQL.prototype.exitLogical_expression = function(ctx) {
        exitCommonProc();
    }


    ProcSQL.prototype.enterRelational_expression = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 3) {
            assert(ctx.children[0].constructor.name == "Relational_expressionContext");

            // create op node 
            createOpNodeCommonProc(NodeType.PLACE_HOLDER); // will get the actual type later
        }
        else if (ctx.children.length == 1) {
            assert(ctx.children[0].constructor.name == "Compound_expressionContext");

            // create op node 
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitRelational_expression = function(ctx) {
        exitCommonProc();
    }

    ProcSQL.prototype.enterRelational_operator = function(ctx) {
        var op;

        if (ctx.children.length == 2) {
            if (ctx.children[0].getText() == ">" && ctx.children[1].getText() == "=") {
                op = NodeType.GREATER_EQUAL;
            }
            else if (ctx.children[0].getText() == "<" && ctx.children[1].getText() == "=") {
                op = NodeType.LESS_EQAL;
            }
            else {
                assert(false);
            }
        }
        else if (ctx.children.length == 1) {
            if (ctx.children[0].getText() == ">") {
                op = NodeType.GREATER;
            }
            else if (ctx.children[0].getText() == "<") {
                op = NodeType.LESS;
            }
            else if (ctx.children[0].getText() == "=") {
                op = NodeType.EQUAL;
            }
            else if (ctx.children[0].getText() == "!=" || 
                ctx.children[0].getText() == "<>" ||
                ctx.children[0].getText() == "^=" ||
                ctx.children[0].getText() == "~=") {
                op = NodeType.NOT_EQUAL;
            }
            else {
                assert(false);
            }
        }
        else {
            assert(false);
        }

        // replace op
        assert(opArray[currentOpNodeIndex].type_ == NodeType.PLACE_HOLDER);
        opArray[currentOpNodeIndex].type_ = op;
    }

    ProcSQL.prototype.enterCompound_expression = function(ctx) {
        // others not supported yet        
        assert(ctx.children.length == 1);
    }

    ProcSQL.prototype.exitCompound_expression = function(ctx) {
    }

    ProcSQL.prototype.enterConcatenation = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 3) {
            // console.log(ctx.children[1].getText());
            if (ctx.children[1].getText() == "+") {
                // create op node 
                createOpNodeCommonProc(NodeType.ADD);
            }
            else if (ctx.children[1].getText() == "-") {
                // create op node 
                createOpNodeCommonProc(NodeType.SUBTRACT);
            }
            else if (ctx.children[1].getText() == "*") {
                // create op node 
                createOpNodeCommonProc(NodeType.MULTIPLY);
            }
            else if (ctx.children[1].getText() == "/") {
                // create op node 
                createOpNodeCommonProc(NodeType.DIVIDE);
            }
            else {
                // others not supported yet
                assert(false);
            }
        }
        else if (ctx.children.length == 4) {
            // others not supported yet
            assert(ctx.children[1].getText() == "|" &&
                ctx.children[2].getText() == "|");

            // create op node 
            createOpNodeCommonProc(NodeType.CONCATENATE);
        }
        else if (ctx.children.length == 1) {
            assert(ctx.children[0].constructor.name == "Model_expressionContext");

            // create op node 
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            // others not supported yet
            assert(false);
        }
    }

    ProcSQL.prototype.exitConcatenation = function(ctx) {
        exitCommonProc();
    }

    ProcSQL.prototype.enterModel_expression = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1);
    }

    ProcSQL.prototype.exitModel_expression = function(ctx) {
    }

    ProcSQL.prototype.enterUnary_expression = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 2) {
            // console.log(ctx.children[1].getText());
            if (ctx.children[0].getText() == "-") {
                // create op node 
                createOpNodeCommonProc(NodeType.NEGATIVE);
            }
            else if (ctx.children[0].getText() == "+") {
                // create op node 
                createOpNodeCommonProc(NodeType.POSITIVE);
            }
            else {
                // others not supported yet
                assert(false);
            }
        }
        else if (ctx.children.length == 1) {
            // others not supported yet
            assert(ctx.children[0].constructor.name == "AtomContext");

            // create op node 
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitUnary_expression = function(ctx) {
        exitCommonProc();
    }

    ProcSQL.prototype.enterAtom = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 3) {
            assert(ctx.children[0].getText() == "(" &&
                ctx.children[2].getText() == ")");

            // create op node 
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else if (ctx.children.length == 1) {
            // create op node 
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitAtom = function(ctx) {
        exitCommonProc();
    }

    ProcSQL.prototype.enterConstant = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1);
    }

    ProcSQL.prototype.exitConstant = function(ctx) {
    }

    ProcSQL.prototype.enterNumeric = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 1) {
            var numberVal = parseInt(ctx.children[0].getText());

            // create op node 
            createOpNodeCommonProc(NodeType.NUMBER, numberVal);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitNumeric = function(ctx) {
        exitCommonProc();
    }

    ProcSQL.prototype.enterQuoted_string = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 1) {
            var stringVal = ctx.children[0].getText()
            if (stringVal.length > 2)
                stringVal = stringVal.substring(1, stringVal.length - 1);
            else
                stringVal = "";

            // create op node 
            createOpNodeCommonProc(NodeType.STRING, stringVal);
        }
        else {
            assert(false);
        }
    }

    ProcSQL.prototype.exitQuoted_string = function(ctx) {
        exitCommonProc();
    }

    ProcSQL.prototype.enterGeneral_element = function(ctx) {
        // others not supported yet
        assert(ctx.children.length == 1);
    }

    ProcSQL.prototype.exitGeneral_element = function(ctx) {
    }

    ProcSQL.prototype.enterGeneral_element_part = function(ctx) {
        console.log(ctx);

        // push previous exp op node
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        if (ctx.children.length == 3) {
            assert(ctx.children[1].getText() == ".");

            // create op node 
            createOpNodeCommonProc(NodeType.QUALIFY);
        }
        else if (ctx.children.length == 1) {
            // create op node 
            createOpNodeCommonProc(NodeType.NOOP);
        }
        else {
            // others not supported yet
            assert(false);
        }
    }

    ProcSQL.prototype.exitGeneral_element_part = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    ProcSQL.prototype.enterRegular_id = function(ctx) {
        console.log(ctx);
        
        if (currentOpNodeIndex != -1) {
            opNodeIndexStack.push(currentOpNodeIndex);
        }

        var r_id;
        try {
            console.log(ctx.REGULAR_ID().getText());
            r_id = ctx.REGULAR_ID().getText();
        } catch (e) {
            if (e instanceof TypeError) {
                try {
                    console.log(ctx.A_LETTER().getText());
                    r_id = ctx.A_LETTER().getText();
                } catch (e2) {
                    if (e2 instanceof TypeError) {
                        try {
                            console.log(ctx.C_LETTER().getText());
                            r_id = ctx.C_LETTER().getText();
                        } catch (e2) {
                            if (e2 instanceof TypeError) {
                                console.log(ctx.OID().getText());
                                r_id = ctx.OID().getText();
                            }
                        }
                    }
                }
            }
        }
        
        createOpNodeCommonProc(NodeType.ID, r_id);
    }

    ProcSQL.prototype.exitRegular_id = function(ctx) {
        exitCommonProc();

        console.log(opArray);
    }

    function createOpNodeCommonProc (nodeOp) {
        var n = new OpTreeNode(currentBlockNumber, nodeOp); 
        opArray.push(n);
        var nIdx = opArray.length - 1;
        
        currentOpNodeIndex = nIdx; // op node index
    }

    function createOpNodeCommonProc (nodeOp, nodeVal) {
        var n = new OpTreeNode(currentBlockNumber, nodeOp);
        n.value_ = nodeVal; 
        opArray.push(n);
        var nIdx = opArray.length - 1;
        
        currentOpNodeIndex = nIdx; // op node index
    }

    function exitCommonProc() {
        if (opNodeIndexStack.length > 0) {
            var pIdx = opNodeIndexStack.pop();

            // link
            opArray[pIdx].children_.push(currentOpNodeIndex);
            opArray[currentOpNodeIndex].parent_ = pIdx;

            currentOpNodeIndex = pIdx;
        }
    }

    function exitChildren2CommonProc() {
        if (opNodeIndexStack.length > 0) {
            var pIdx = opNodeIndexStack.pop();

            // link
            opArray[pIdx].children2_.push(currentOpNodeIndex);
            opArray[currentOpNodeIndex].parent_ = pIdx;

            currentOpNodeIndex = pIdx;
        }
    }

    function simplifyOpTree() {
        assert(currentOpNodeIndex == 0);

        recursive_removeJoinFromOpTree(currentOpNodeIndex);
        recursive_simplifyOpTree(currentOpNodeIndex);
    }

    function recursive_removeJoinFromOpTree(nodeIdx) {
        for (var i = 0; i< opArray[nodeIdx].children_.length; ++i) {
            recursive_removeJoinFromOpTree(opArray[nodeIdx].children_[i]);

            if (opArray[opArray[nodeIdx].children_[i]].type_ == NodeType.JOIN) {
                var joinNodeIdx = opArray[nodeIdx].children_[i];
                // has more than 1 child
                assert(opArray[joinNodeIdx].children_.length > 1);
                // inner join only; others not supported yet
                for (var j = 1; j < opArray[joinNodeIdx].children_.length; ++j) {
                    assert(opArray[opArray[joinNodeIdx].children_[j]].type_ == NodeType.JOIN_INNER &&
                        opArray[opArray[joinNodeIdx].children_[j]].children_.length == 1 &&
                        opArray[opArray[joinNodeIdx].children_[j]].children2_.length == 1);
                }

                // link children of JOIN other than the last child
                for (var j = 0; j < opArray[joinNodeIdx].children_.length - 1; ++j) {
                    opArray[opArray[joinNodeIdx].children_[j]].parent_ = opArray[joinNodeIdx].children_[j + 1];
                    opArray[opArray[joinNodeIdx].children_[j + 1]].children_.unshift(opArray[joinNodeIdx].children_[j]);
                }

                // link last child of JOIN and bypass JOIN
                opArray[opArray[joinNodeIdx].children_[opArray[joinNodeIdx].children_.length - 1]].parent_ = nodeIdx;
                opArray[nodeIdx].children_[i] = opArray[joinNodeIdx].children_[opArray[joinNodeIdx].children_.length - 1];
            }
        }
    }

    function recursive_simplifyOpTree(nodeIdx) {
        for (var i = 0; i< opArray[nodeIdx].children_.length; ++i) {
            recursive_simplifyOpTree(opArray[nodeIdx].children_[i]);

            if (opArray[opArray[nodeIdx].children_[i]].type_ == NodeType.NOOP) {
                // not root
                assert(opArray[opArray[nodeIdx].children_[i]].children_.length == 1 &&
                opArray[opArray[nodeIdx].children_[i]].children2_.length == 0);
                // link
                opArray[opArray[opArray[nodeIdx].children_[i]].children_[0]].parent_ = nodeIdx;
                opArray[nodeIdx].children_[i] = opArray[opArray[nodeIdx].children_[i]].children_[0];
            }
        }

        for (var i = 0; i< opArray[nodeIdx].children2_.length; ++i) {
            recursive_simplifyOpTree(opArray[nodeIdx].children2_[i]);

            if (opArray[opArray[nodeIdx].children2_[i]].type_ == NodeType.NOOP) {
                // not root
                assert(opArray[opArray[nodeIdx].children2_[i]].children_.length == 1 &&
                opArray[opArray[nodeIdx].children2_[i]].children2_.length == 0);
                // link
                opArray[opArray[opArray[nodeIdx].children2_[i]].children_[0]].parent_ = nodeIdx;
                opArray[nodeIdx].children2_[i] = opArray[opArray[nodeIdx].children2_[i]].children_[0];
            }
        }

    }

    function compactOpTree() {
        // create root for new tree
        var n = new OpTreeNode(currentBlockNumber, NodeType.NOOP); 
        newOpArray.push(n);
        var nIdx = newOpArray.length - 1;
        
        newCurrentOpNodeIndex = nIdx; // op node index

        recursive_compactOpTree(currentOpNodeIndex, newCurrentOpNodeIndex);
    }

    function recursive_compactOpTree(nodeIdx, newNodeIdx) {
        for (var i = 0; i< opArray[nodeIdx].children_.length; ++i) {
            // create corresponding child in new tree
            var c = new OpTreeNode(currentBlockNumber, opArray[opArray[nodeIdx].children_[i]].type_, newNodeIdx);
            c.value_ = opArray[opArray[nodeIdx].children_[i]].value_;
            newOpArray.push(c);
            var cIdx = newOpArray.length - 1;
            // link child in new tree
            newOpArray[newNodeIdx].children_.push(cIdx);

            recursive_compactOpTree(opArray[nodeIdx].children_[i], cIdx);
        }

        for (var i = 0; i< opArray[nodeIdx].children2_.length; ++i) {
            // create corresponding child in new tree
            var c = new OpTreeNode(currentBlockNumber, opArray[opArray[nodeIdx].children2_[i]].type_, newNodeIdx);
            c.value_ = opArray[opArray[nodeIdx].children2_[i]].value_;
            newOpArray.push(c);
            var cIdx = newOpArray.length - 1;
            // link child in new tree
            newOpArray[newNodeIdx].children2_.push(cIdx);

            recursive_compactOpTree(opArray[nodeIdx].children2_[i], cIdx);
        }

    }

    function sqlfunction() {
        resetGlobal();

        var sql = document.getElementById("sqlList").value.toUpperCase();
console.log(sql); 
        //document.getElementById("demo").innerHTML = sql;

        var chars = new antlr4.InputStream(sql);
//console.log(chars);
        var lexer = new PlSqlLexer.PlSqlLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new PlSqlParser.PlSqlParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.sql_script();
//console.log(tree);

        var proc = new ProcSQL();
        antlr4.tree.ParseTreeWalker.DEFAULT.walk(proc, tree);    
    }

    function resetGlobal() {
        currentOpNodeIndex = -1; // index of the op node currently under processing
        opArray = [];
        opNodeIndexStack = [];

        newCurrentOpNodeIndex = -1; // index of the op node currently under processing
        newOpArray = [];
    }

    function ContextInfo(curBlockNum, curStatus) {
        this.blockNumber_ = curBlockNum;
        this.status_ = curStatus;
    }

    // block info tree node constructor
    function BlockInfo(blockNum, projIdx = -1, fromIdx = -1, selIdx = -1, parentIdx = -1) {
        this.blockNo_ = blockNum;
        this.projIndex_ = projIdx;
        this.fromIndex_ = fromIdx;
        this.selIndex_ = selIdx;
        this.parentIndex_ = parentIdx; // index of the parent node in the opArray
    }

    // op tree node constructor
    function OpTreeNode(blockNum, type, parent = -1, children = [], children2 = [], val = "") {
        this.blockNo_ = blockNum;
        this.type_ = type;
        this.parent_ = parent; // index of the parent node in the opArray
        this.children_ = children; // index of the child node in the opArray
        this.children2_ = children2; // index of the op-specific child2 nodes in the opArray
        this.value_ = val;
    }

    // op tree node type
    var NodeType = {
        PLACE_HOLDER: -20,
        NOOP: -10,
        PROJ: 10, // may have no parameter
        PROJ_DISTINCT: 20, // may have no parameter
        RENAME_ATTRIBUTE: 30,
        RENAME_TABLE: 40,
        JOIN_CROSS_COMMA: 50, // for FROM clause, may have only one operand
        JOIN_LEFT: 54,
        JOIN_RIGHT: 58,
        JOIN_FULL: 62,
        JOIN_CROSS: 66,
        JOIN: 70,
        JOIN_NATURAL: 74,
        JOIN_INNER: 78,
        SEL: 90,    
        ID: 100,
        ATTRIBUTE_NAME: 110,
        TABLE_NAME: 120, // indicate the name is a table name
        NUMBER: 130,
        STRING: 140,
        QUALIFY: 150,
        OR: 1000,
        AND: 1010,
        NOT: 1020,
        IS_NULL: 1030,
        IS_NOT_NULL: 1040,
        EQUAL: 1150,
        NOT_EQUAL: 1160,
        GREATER: 1170,
        GREATER_EQUAL: 1180,
        LESS: 1190,
        LESS_EQAL: 1200,
        CONCATENATE: 1300,
        ADD: 1310,
        SUBTRACT: 1320,
        MULTIPLY: 1330,
        DIVIDE: 1340,
        NEGATIVE: 1600,
        POSITIVE: 1610,
	TABLE: 1620,
	CURSOR: 1630,
	OPARRAY_INDEX: 1640,
	BOOL: 1650,
	UNKNOWN: 1660

    }

    // parser status
    var StatusEnum = {
        INIT: 0,
        BEGIN_QUERY: 1,    
        PROJECT: 2,
        PROJECT_MORE: 3,
        JOIN_TABLE_ONE: 4,
        SELECT: 5,
        FROM: 6,
        TABLE_ONE: 7,
        JOIN_TABLE_TWO: 8,
        JOIN_TABLE_ONE_PUSHED: 9,
        JOIN_TABLE_TWO_ON: 10,
        EXPRESSION_START: 100,
        EXPRESSION: 101 
    }
        
    var currentOpNodeIndex = -1; // index of the op node currently under processing
    var opArray = [];
    var opNodeIndexStack = [];

    var newCurrentOpNodeIndex = -1; // index of the op node currently under processing
    var newOpArray = [];



    var currentStatus = StatusEnum.INIT; 
    var maxBlockNumber = 0; // the id of a query block
    var currentBlockNumber = 0; 
    var blockInfoArray = [];

    var joinNodeStack = [];
    var contextInfoStack = [];



    function assert(condition, message) {
        if (!condition) {
            message = message || "Assertion failed";
            if (typeof Error !== "undefined") {
                throw new Error(message);
            }
            throw message; // Fallback
        }
    }

