// Generated from PlSqlParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PlSqlParser.
function PlSqlParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PlSqlParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PlSqlParserListener.prototype.constructor = PlSqlParserListener;

// Enter a parse tree produced by PlSqlParser#sql_script.
PlSqlParserListener.prototype.enterSql_script = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_script.
PlSqlParserListener.prototype.exitSql_script = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unit_statement.
PlSqlParserListener.prototype.enterUnit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unit_statement.
PlSqlParserListener.prototype.exitUnit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_function.
PlSqlParserListener.prototype.enterDrop_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_function.
PlSqlParserListener.prototype.exitDrop_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_function.
PlSqlParserListener.prototype.enterAlter_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_function.
PlSqlParserListener.prototype.exitAlter_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_function_body.
PlSqlParserListener.prototype.enterCreate_function_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_function_body.
PlSqlParserListener.prototype.exitCreate_function_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parallel_enable_clause.
PlSqlParserListener.prototype.enterParallel_enable_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parallel_enable_clause.
PlSqlParserListener.prototype.exitParallel_enable_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_by_clause.
PlSqlParserListener.prototype.enterPartition_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_by_clause.
PlSqlParserListener.prototype.exitPartition_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#result_cache_clause.
PlSqlParserListener.prototype.enterResult_cache_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#result_cache_clause.
PlSqlParserListener.prototype.exitResult_cache_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relies_on_part.
PlSqlParserListener.prototype.enterRelies_on_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relies_on_part.
PlSqlParserListener.prototype.exitRelies_on_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#streaming_clause.
PlSqlParserListener.prototype.enterStreaming_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#streaming_clause.
PlSqlParserListener.prototype.exitStreaming_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_package.
PlSqlParserListener.prototype.enterDrop_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_package.
PlSqlParserListener.prototype.exitDrop_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_package.
PlSqlParserListener.prototype.enterAlter_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_package.
PlSqlParserListener.prototype.exitAlter_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_package.
PlSqlParserListener.prototype.enterCreate_package = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_package.
PlSqlParserListener.prototype.exitCreate_package = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_package_body.
PlSqlParserListener.prototype.enterCreate_package_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_package_body.
PlSqlParserListener.prototype.exitCreate_package_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_obj_spec.
PlSqlParserListener.prototype.enterPackage_obj_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_obj_spec.
PlSqlParserListener.prototype.exitPackage_obj_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_spec.
PlSqlParserListener.prototype.enterProcedure_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_spec.
PlSqlParserListener.prototype.exitProcedure_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_spec.
PlSqlParserListener.prototype.enterFunction_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_spec.
PlSqlParserListener.prototype.exitFunction_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_obj_body.
PlSqlParserListener.prototype.enterPackage_obj_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_obj_body.
PlSqlParserListener.prototype.exitPackage_obj_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_procedure.
PlSqlParserListener.prototype.enterDrop_procedure = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_procedure.
PlSqlParserListener.prototype.exitDrop_procedure = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_procedure.
PlSqlParserListener.prototype.enterAlter_procedure = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_procedure.
PlSqlParserListener.prototype.exitAlter_procedure = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_body.
PlSqlParserListener.prototype.enterFunction_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_body.
PlSqlParserListener.prototype.exitFunction_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_body.
PlSqlParserListener.prototype.enterProcedure_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_body.
PlSqlParserListener.prototype.exitProcedure_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_procedure_body.
PlSqlParserListener.prototype.enterCreate_procedure_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_procedure_body.
PlSqlParserListener.prototype.exitCreate_procedure_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_trigger.
PlSqlParserListener.prototype.enterDrop_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_trigger.
PlSqlParserListener.prototype.exitDrop_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_trigger.
PlSqlParserListener.prototype.enterAlter_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_trigger.
PlSqlParserListener.prototype.exitAlter_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_trigger.
PlSqlParserListener.prototype.enterCreate_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_trigger.
PlSqlParserListener.prototype.exitCreate_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_follows_clause.
PlSqlParserListener.prototype.enterTrigger_follows_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_follows_clause.
PlSqlParserListener.prototype.exitTrigger_follows_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_when_clause.
PlSqlParserListener.prototype.enterTrigger_when_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_when_clause.
PlSqlParserListener.prototype.exitTrigger_when_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_dml_trigger.
PlSqlParserListener.prototype.enterSimple_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_dml_trigger.
PlSqlParserListener.prototype.exitSimple_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_each_row.
PlSqlParserListener.prototype.enterFor_each_row = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_each_row.
PlSqlParserListener.prototype.exitFor_each_row = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_dml_trigger.
PlSqlParserListener.prototype.enterCompound_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_dml_trigger.
PlSqlParserListener.prototype.exitCompound_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_dml_trigger.
PlSqlParserListener.prototype.enterNon_dml_trigger = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_dml_trigger.
PlSqlParserListener.prototype.exitNon_dml_trigger = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_body.
PlSqlParserListener.prototype.enterTrigger_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_body.
PlSqlParserListener.prototype.exitTrigger_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#routine_clause.
PlSqlParserListener.prototype.enterRoutine_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#routine_clause.
PlSqlParserListener.prototype.exitRoutine_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_trigger_block.
PlSqlParserListener.prototype.enterCompound_trigger_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_trigger_block.
PlSqlParserListener.prototype.exitCompound_trigger_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#timing_point_section.
PlSqlParserListener.prototype.enterTiming_point_section = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#timing_point_section.
PlSqlParserListener.prototype.exitTiming_point_section = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#non_dml_event.
PlSqlParserListener.prototype.enterNon_dml_event = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#non_dml_event.
PlSqlParserListener.prototype.exitNon_dml_event = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_clause.
PlSqlParserListener.prototype.enterDml_event_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_clause.
PlSqlParserListener.prototype.exitDml_event_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_element.
PlSqlParserListener.prototype.enterDml_event_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_element.
PlSqlParserListener.prototype.exitDml_event_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_event_nested_clause.
PlSqlParserListener.prototype.enterDml_event_nested_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_event_nested_clause.
PlSqlParserListener.prototype.exitDml_event_nested_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#referencing_clause.
PlSqlParserListener.prototype.enterReferencing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#referencing_clause.
PlSqlParserListener.prototype.exitReferencing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#referencing_element.
PlSqlParserListener.prototype.enterReferencing_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#referencing_element.
PlSqlParserListener.prototype.exitReferencing_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_type.
PlSqlParserListener.prototype.enterDrop_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_type.
PlSqlParserListener.prototype.exitDrop_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_type.
PlSqlParserListener.prototype.enterAlter_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_type.
PlSqlParserListener.prototype.exitAlter_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compile_type_clause.
PlSqlParserListener.prototype.enterCompile_type_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compile_type_clause.
PlSqlParserListener.prototype.exitCompile_type_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#replace_type_clause.
PlSqlParserListener.prototype.enterReplace_type_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#replace_type_clause.
PlSqlParserListener.prototype.exitReplace_type_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_method_spec.
PlSqlParserListener.prototype.enterAlter_method_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_method_spec.
PlSqlParserListener.prototype.exitAlter_method_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_method_element.
PlSqlParserListener.prototype.enterAlter_method_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_method_element.
PlSqlParserListener.prototype.exitAlter_method_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_attribute_definition.
PlSqlParserListener.prototype.enterAlter_attribute_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_attribute_definition.
PlSqlParserListener.prototype.exitAlter_attribute_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_definition.
PlSqlParserListener.prototype.enterAttribute_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_definition.
PlSqlParserListener.prototype.exitAttribute_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_collection_clauses.
PlSqlParserListener.prototype.enterAlter_collection_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_collection_clauses.
PlSqlParserListener.prototype.exitAlter_collection_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dependent_handling_clause.
PlSqlParserListener.prototype.enterDependent_handling_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dependent_handling_clause.
PlSqlParserListener.prototype.exitDependent_handling_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dependent_exceptions_part.
PlSqlParserListener.prototype.enterDependent_exceptions_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dependent_exceptions_part.
PlSqlParserListener.prototype.exitDependent_exceptions_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_type.
PlSqlParserListener.prototype.enterCreate_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_type.
PlSqlParserListener.prototype.exitCreate_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_definition.
PlSqlParserListener.prototype.enterType_definition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_definition.
PlSqlParserListener.prototype.exitType_definition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_type_def.
PlSqlParserListener.prototype.enterObject_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_type_def.
PlSqlParserListener.prototype.exitObject_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_as_part.
PlSqlParserListener.prototype.enterObject_as_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_as_part.
PlSqlParserListener.prototype.exitObject_as_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_under_part.
PlSqlParserListener.prototype.enterObject_under_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_under_part.
PlSqlParserListener.prototype.exitObject_under_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#nested_table_type_def.
PlSqlParserListener.prototype.enterNested_table_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#nested_table_type_def.
PlSqlParserListener.prototype.exitNested_table_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sqlj_object_type.
PlSqlParserListener.prototype.enterSqlj_object_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sqlj_object_type.
PlSqlParserListener.prototype.exitSqlj_object_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_body.
PlSqlParserListener.prototype.enterType_body = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_body.
PlSqlParserListener.prototype.exitType_body = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_body_elements.
PlSqlParserListener.prototype.enterType_body_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_body_elements.
PlSqlParserListener.prototype.exitType_body_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#map_order_func_declaration.
PlSqlParserListener.prototype.enterMap_order_func_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#map_order_func_declaration.
PlSqlParserListener.prototype.exitMap_order_func_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subprog_decl_in_type.
PlSqlParserListener.prototype.enterSubprog_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subprog_decl_in_type.
PlSqlParserListener.prototype.exitSubprog_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#proc_decl_in_type.
PlSqlParserListener.prototype.enterProc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#proc_decl_in_type.
PlSqlParserListener.prototype.exitProc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#func_decl_in_type.
PlSqlParserListener.prototype.enterFunc_decl_in_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#func_decl_in_type.
PlSqlParserListener.prototype.exitFunc_decl_in_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constructor_declaration.
PlSqlParserListener.prototype.enterConstructor_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constructor_declaration.
PlSqlParserListener.prototype.exitConstructor_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#modifier_clause.
PlSqlParserListener.prototype.enterModifier_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#modifier_clause.
PlSqlParserListener.prototype.exitModifier_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#object_member_spec.
PlSqlParserListener.prototype.enterObject_member_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#object_member_spec.
PlSqlParserListener.prototype.exitObject_member_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sqlj_object_type_attr.
PlSqlParserListener.prototype.enterSqlj_object_type_attr = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sqlj_object_type_attr.
PlSqlParserListener.prototype.exitSqlj_object_type_attr = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#element_spec.
PlSqlParserListener.prototype.enterElement_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#element_spec.
PlSqlParserListener.prototype.exitElement_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#element_spec_options.
PlSqlParserListener.prototype.enterElement_spec_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#element_spec_options.
PlSqlParserListener.prototype.exitElement_spec_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subprogram_spec.
PlSqlParserListener.prototype.enterSubprogram_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subprogram_spec.
PlSqlParserListener.prototype.exitSubprogram_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_procedure_spec.
PlSqlParserListener.prototype.enterType_procedure_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_procedure_spec.
PlSqlParserListener.prototype.exitType_procedure_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_function_spec.
PlSqlParserListener.prototype.enterType_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_function_spec.
PlSqlParserListener.prototype.exitType_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constructor_spec.
PlSqlParserListener.prototype.enterConstructor_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constructor_spec.
PlSqlParserListener.prototype.exitConstructor_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#map_order_function_spec.
PlSqlParserListener.prototype.enterMap_order_function_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#map_order_function_spec.
PlSqlParserListener.prototype.exitMap_order_function_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_clause.
PlSqlParserListener.prototype.enterPragma_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_clause.
PlSqlParserListener.prototype.exitPragma_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_elements.
PlSqlParserListener.prototype.enterPragma_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_elements.
PlSqlParserListener.prototype.exitPragma_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_elements_parameter.
PlSqlParserListener.prototype.enterType_elements_parameter = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_elements_parameter.
PlSqlParserListener.prototype.exitType_elements_parameter = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_sequence.
PlSqlParserListener.prototype.enterDrop_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_sequence.
PlSqlParserListener.prototype.exitDrop_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_sequence.
PlSqlParserListener.prototype.enterAlter_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_sequence.
PlSqlParserListener.prototype.exitAlter_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_sequence.
PlSqlParserListener.prototype.enterCreate_sequence = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_sequence.
PlSqlParserListener.prototype.exitCreate_sequence = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_spec.
PlSqlParserListener.prototype.enterSequence_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_spec.
PlSqlParserListener.prototype.exitSequence_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_start_clause.
PlSqlParserListener.prototype.enterSequence_start_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_start_clause.
PlSqlParserListener.prototype.exitSequence_start_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_index.
PlSqlParserListener.prototype.enterCreate_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_index.
PlSqlParserListener.prototype.exitCreate_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_index.
PlSqlParserListener.prototype.enterAlter_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_index.
PlSqlParserListener.prototype.exitAlter_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_index.
PlSqlParserListener.prototype.enterDrop_index = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_index.
PlSqlParserListener.prototype.exitDrop_index = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_table.
PlSqlParserListener.prototype.enterCreate_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_table.
PlSqlParserListener.prototype.exitCreate_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#size_clause.
PlSqlParserListener.prototype.enterSize_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#size_clause.
PlSqlParserListener.prototype.exitSize_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_table.
PlSqlParserListener.prototype.enterDrop_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_table.
PlSqlParserListener.prototype.exitDrop_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#comment_on_column.
PlSqlParserListener.prototype.enterComment_on_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#comment_on_column.
PlSqlParserListener.prototype.exitComment_on_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#create_synonym.
PlSqlParserListener.prototype.enterCreate_synonym = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#create_synonym.
PlSqlParserListener.prototype.exitCreate_synonym = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#comment_on_table.
PlSqlParserListener.prototype.enterComment_on_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#comment_on_table.
PlSqlParserListener.prototype.exitComment_on_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#alter_table.
PlSqlParserListener.prototype.enterAlter_table = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#alter_table.
PlSqlParserListener.prototype.exitAlter_table = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#add_constraint.
PlSqlParserListener.prototype.enterAdd_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#add_constraint.
PlSqlParserListener.prototype.exitAdd_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#check_constraint.
PlSqlParserListener.prototype.enterCheck_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#check_constraint.
PlSqlParserListener.prototype.exitCheck_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#drop_constraint.
PlSqlParserListener.prototype.enterDrop_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#drop_constraint.
PlSqlParserListener.prototype.exitDrop_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#enable_constraint.
PlSqlParserListener.prototype.enterEnable_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#enable_constraint.
PlSqlParserListener.prototype.exitEnable_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#disable_constraint.
PlSqlParserListener.prototype.enterDisable_constraint = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#disable_constraint.
PlSqlParserListener.prototype.exitDisable_constraint = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#foreign_key_clause.
PlSqlParserListener.prototype.enterForeign_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#foreign_key_clause.
PlSqlParserListener.prototype.exitForeign_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#references_clause.
PlSqlParserListener.prototype.enterReferences_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#references_clause.
PlSqlParserListener.prototype.exitReferences_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#on_delete_clause.
PlSqlParserListener.prototype.enterOn_delete_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#on_delete_clause.
PlSqlParserListener.prototype.exitOn_delete_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unique_key_clause.
PlSqlParserListener.prototype.enterUnique_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unique_key_clause.
PlSqlParserListener.prototype.exitUnique_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#primary_key_clause.
PlSqlParserListener.prototype.enterPrimary_key_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#primary_key_clause.
PlSqlParserListener.prototype.exitPrimary_key_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#anonymous_block.
PlSqlParserListener.prototype.enterAnonymous_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#anonymous_block.
PlSqlParserListener.prototype.exitAnonymous_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#invoker_rights_clause.
PlSqlParserListener.prototype.enterInvoker_rights_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#invoker_rights_clause.
PlSqlParserListener.prototype.exitInvoker_rights_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compiler_parameters_clause.
PlSqlParserListener.prototype.enterCompiler_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compiler_parameters_clause.
PlSqlParserListener.prototype.exitCompiler_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#call_spec.
PlSqlParserListener.prototype.enterCall_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#call_spec.
PlSqlParserListener.prototype.exitCall_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#java_spec.
PlSqlParserListener.prototype.enterJava_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#java_spec.
PlSqlParserListener.prototype.exitJava_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_spec.
PlSqlParserListener.prototype.enterC_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_spec.
PlSqlParserListener.prototype.exitC_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_agent_in_clause.
PlSqlParserListener.prototype.enterC_agent_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_agent_in_clause.
PlSqlParserListener.prototype.exitC_agent_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#c_parameters_clause.
PlSqlParserListener.prototype.enterC_parameters_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#c_parameters_clause.
PlSqlParserListener.prototype.exitC_parameters_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter.
PlSqlParserListener.prototype.enterParameter = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter.
PlSqlParserListener.prototype.exitParameter = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#default_value_part.
PlSqlParserListener.prototype.enterDefault_value_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#default_value_part.
PlSqlParserListener.prototype.exitDefault_value_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#declare_spec.
PlSqlParserListener.prototype.enterDeclare_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#declare_spec.
PlSqlParserListener.prototype.exitDeclare_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#variable_declaration.
PlSqlParserListener.prototype.enterVariable_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#variable_declaration.
PlSqlParserListener.prototype.exitVariable_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subtype_declaration.
PlSqlParserListener.prototype.enterSubtype_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subtype_declaration.
PlSqlParserListener.prototype.exitSubtype_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_declaration.
PlSqlParserListener.prototype.enterCursor_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_declaration.
PlSqlParserListener.prototype.exitCursor_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_spec.
PlSqlParserListener.prototype.enterParameter_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_spec.
PlSqlParserListener.prototype.exitParameter_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_declaration.
PlSqlParserListener.prototype.enterException_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_declaration.
PlSqlParserListener.prototype.exitException_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pragma_declaration.
PlSqlParserListener.prototype.enterPragma_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pragma_declaration.
PlSqlParserListener.prototype.exitPragma_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#record_type_def.
PlSqlParserListener.prototype.enterRecord_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#record_type_def.
PlSqlParserListener.prototype.exitRecord_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#field_spec.
PlSqlParserListener.prototype.enterField_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#field_spec.
PlSqlParserListener.prototype.exitField_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#ref_cursor_type_def.
PlSqlParserListener.prototype.enterRef_cursor_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#ref_cursor_type_def.
PlSqlParserListener.prototype.exitRef_cursor_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_declaration.
PlSqlParserListener.prototype.enterType_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_declaration.
PlSqlParserListener.prototype.exitType_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_type_def.
PlSqlParserListener.prototype.enterTable_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_type_def.
PlSqlParserListener.prototype.exitTable_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_indexed_by_part.
PlSqlParserListener.prototype.enterTable_indexed_by_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_indexed_by_part.
PlSqlParserListener.prototype.exitTable_indexed_by_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#varray_type_def.
PlSqlParserListener.prototype.enterVarray_type_def = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#varray_type_def.
PlSqlParserListener.prototype.exitVarray_type_def = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seq_of_statements.
PlSqlParserListener.prototype.enterSeq_of_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seq_of_statements.
PlSqlParserListener.prototype.exitSeq_of_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#label_declaration.
PlSqlParserListener.prototype.enterLabel_declaration = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#label_declaration.
PlSqlParserListener.prototype.exitLabel_declaration = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#statement.
PlSqlParserListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#statement.
PlSqlParserListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#swallow_to_semi.
PlSqlParserListener.prototype.enterSwallow_to_semi = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#swallow_to_semi.
PlSqlParserListener.prototype.exitSwallow_to_semi = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#assignment_statement.
PlSqlParserListener.prototype.enterAssignment_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#assignment_statement.
PlSqlParserListener.prototype.exitAssignment_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#continue_statement.
PlSqlParserListener.prototype.enterContinue_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#continue_statement.
PlSqlParserListener.prototype.exitContinue_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exit_statement.
PlSqlParserListener.prototype.enterExit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exit_statement.
PlSqlParserListener.prototype.exitExit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#goto_statement.
PlSqlParserListener.prototype.enterGoto_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#goto_statement.
PlSqlParserListener.prototype.exitGoto_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#if_statement.
PlSqlParserListener.prototype.enterIf_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#if_statement.
PlSqlParserListener.prototype.exitIf_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#elsif_part.
PlSqlParserListener.prototype.enterElsif_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#elsif_part.
PlSqlParserListener.prototype.exitElsif_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#else_part.
PlSqlParserListener.prototype.enterElse_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#else_part.
PlSqlParserListener.prototype.exitElse_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#loop_statement.
PlSqlParserListener.prototype.enterLoop_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#loop_statement.
PlSqlParserListener.prototype.exitLoop_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_loop_param.
PlSqlParserListener.prototype.enterCursor_loop_param = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_loop_param.
PlSqlParserListener.prototype.exitCursor_loop_param = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#forall_statement.
PlSqlParserListener.prototype.enterForall_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#forall_statement.
PlSqlParserListener.prototype.exitForall_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bounds_clause.
PlSqlParserListener.prototype.enterBounds_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bounds_clause.
PlSqlParserListener.prototype.exitBounds_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#between_bound.
PlSqlParserListener.prototype.enterBetween_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#between_bound.
PlSqlParserListener.prototype.exitBetween_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lower_bound.
PlSqlParserListener.prototype.enterLower_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lower_bound.
PlSqlParserListener.prototype.exitLower_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#upper_bound.
PlSqlParserListener.prototype.enterUpper_bound = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#upper_bound.
PlSqlParserListener.prototype.exitUpper_bound = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#null_statement.
PlSqlParserListener.prototype.enterNull_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#null_statement.
PlSqlParserListener.prototype.exitNull_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#raise_statement.
PlSqlParserListener.prototype.enterRaise_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#raise_statement.
PlSqlParserListener.prototype.exitRaise_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#return_statement.
PlSqlParserListener.prototype.enterReturn_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#return_statement.
PlSqlParserListener.prototype.exitReturn_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_call.
PlSqlParserListener.prototype.enterFunction_call = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_call.
PlSqlParserListener.prototype.exitFunction_call = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pipe_row_statement.
PlSqlParserListener.prototype.enterPipe_row_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pipe_row_statement.
PlSqlParserListener.prototype.exitPipe_row_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#body.
PlSqlParserListener.prototype.enterBody = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#body.
PlSqlParserListener.prototype.exitBody = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_handler.
PlSqlParserListener.prototype.enterException_handler = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_handler.
PlSqlParserListener.prototype.exitException_handler = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_block.
PlSqlParserListener.prototype.enterTrigger_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_block.
PlSqlParserListener.prototype.exitTrigger_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#block.
PlSqlParserListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#block.
PlSqlParserListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_statement.
PlSqlParserListener.prototype.enterSql_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_statement.
PlSqlParserListener.prototype.exitSql_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#execute_immediate.
PlSqlParserListener.prototype.enterExecute_immediate = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#execute_immediate.
PlSqlParserListener.prototype.exitExecute_immediate = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dynamic_returning_clause.
PlSqlParserListener.prototype.enterDynamic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dynamic_returning_clause.
PlSqlParserListener.prototype.exitDynamic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#data_manipulation_language_statements.
PlSqlParserListener.prototype.enterData_manipulation_language_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#data_manipulation_language_statements.
PlSqlParserListener.prototype.exitData_manipulation_language_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_manipulation_statements.
PlSqlParserListener.prototype.enterCursor_manipulation_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_manipulation_statements.
PlSqlParserListener.prototype.exitCursor_manipulation_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#close_statement.
PlSqlParserListener.prototype.enterClose_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#close_statement.
PlSqlParserListener.prototype.exitClose_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#open_statement.
PlSqlParserListener.prototype.enterOpen_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#open_statement.
PlSqlParserListener.prototype.exitOpen_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#fetch_statement.
PlSqlParserListener.prototype.enterFetch_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#fetch_statement.
PlSqlParserListener.prototype.exitFetch_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#open_for_statement.
PlSqlParserListener.prototype.enterOpen_for_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#open_for_statement.
PlSqlParserListener.prototype.exitOpen_for_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#transaction_control_statements.
PlSqlParserListener.prototype.enterTransaction_control_statements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#transaction_control_statements.
PlSqlParserListener.prototype.exitTransaction_control_statements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_transaction_command.
PlSqlParserListener.prototype.enterSet_transaction_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_transaction_command.
PlSqlParserListener.prototype.exitSet_transaction_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_constraint_command.
PlSqlParserListener.prototype.enterSet_constraint_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_constraint_command.
PlSqlParserListener.prototype.exitSet_constraint_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#commit_statement.
PlSqlParserListener.prototype.enterCommit_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#commit_statement.
PlSqlParserListener.prototype.exitCommit_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#write_clause.
PlSqlParserListener.prototype.enterWrite_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#write_clause.
PlSqlParserListener.prototype.exitWrite_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_statement.
PlSqlParserListener.prototype.enterRollback_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_statement.
PlSqlParserListener.prototype.exitRollback_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#savepoint_statement.
PlSqlParserListener.prototype.enterSavepoint_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#savepoint_statement.
PlSqlParserListener.prototype.exitSavepoint_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#explain_statement.
PlSqlParserListener.prototype.enterExplain_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#explain_statement.
PlSqlParserListener.prototype.exitExplain_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_statement.
PlSqlParserListener.prototype.enterSelect_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_statement.
PlSqlParserListener.prototype.exitSelect_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_factoring_clause.
PlSqlParserListener.prototype.enterSubquery_factoring_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_factoring_clause.
PlSqlParserListener.prototype.exitSubquery_factoring_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#factoring_element.
PlSqlParserListener.prototype.enterFactoring_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#factoring_element.
PlSqlParserListener.prototype.exitFactoring_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#search_clause.
PlSqlParserListener.prototype.enterSearch_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#search_clause.
PlSqlParserListener.prototype.exitSearch_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cycle_clause.
PlSqlParserListener.prototype.enterCycle_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cycle_clause.
PlSqlParserListener.prototype.exitCycle_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery.
PlSqlParserListener.prototype.enterSubquery = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery.
PlSqlParserListener.prototype.exitSubquery = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_basic_elements.
PlSqlParserListener.prototype.enterSubquery_basic_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_basic_elements.
PlSqlParserListener.prototype.exitSubquery_basic_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_operation_part.
PlSqlParserListener.prototype.enterSubquery_operation_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_operation_part.
PlSqlParserListener.prototype.exitSubquery_operation_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_block.
PlSqlParserListener.prototype.enterQuery_block = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_block.
PlSqlParserListener.prototype.exitQuery_block = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#selected_element.
PlSqlParserListener.prototype.enterSelected_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#selected_element.
PlSqlParserListener.prototype.exitSelected_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#from_clause.
PlSqlParserListener.prototype.enterFrom_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#from_clause.
PlSqlParserListener.prototype.exitFrom_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#select_list_elements.
PlSqlParserListener.prototype.enterSelect_list_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#select_list_elements.
PlSqlParserListener.prototype.exitSelect_list_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_list.
PlSqlParserListener.prototype.enterTable_ref_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_list.
PlSqlParserListener.prototype.exitTable_ref_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref.
PlSqlParserListener.prototype.enterTable_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref.
PlSqlParserListener.prototype.exitTable_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux.
PlSqlParserListener.prototype.enterTable_ref_aux = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux.
PlSqlParserListener.prototype.exitTable_ref_aux = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_one.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_one = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_one.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_one = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_two.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_two = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_two.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_two = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_ref_aux_internal_three.
PlSqlParserListener.prototype.enterTable_ref_aux_internal_three = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_ref_aux_internal_three.
PlSqlParserListener.prototype.exitTable_ref_aux_internal_three = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_clause.
PlSqlParserListener.prototype.enterJoin_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_clause.
PlSqlParserListener.prototype.exitJoin_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_on_part.
PlSqlParserListener.prototype.enterJoin_on_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_on_part.
PlSqlParserListener.prototype.exitJoin_on_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#join_using_part.
PlSqlParserListener.prototype.enterJoin_using_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#join_using_part.
PlSqlParserListener.prototype.exitJoin_using_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#outer_join_type.
PlSqlParserListener.prototype.enterOuter_join_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#outer_join_type.
PlSqlParserListener.prototype.exitOuter_join_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_partition_clause.
PlSqlParserListener.prototype.enterQuery_partition_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_partition_clause.
PlSqlParserListener.prototype.exitQuery_partition_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#flashback_query_clause.
PlSqlParserListener.prototype.enterFlashback_query_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#flashback_query_clause.
PlSqlParserListener.prototype.exitFlashback_query_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_clause.
PlSqlParserListener.prototype.enterPivot_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_clause.
PlSqlParserListener.prototype.exitPivot_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_element.
PlSqlParserListener.prototype.enterPivot_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_element.
PlSqlParserListener.prototype.exitPivot_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_for_clause.
PlSqlParserListener.prototype.enterPivot_for_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_for_clause.
PlSqlParserListener.prototype.exitPivot_for_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause.
PlSqlParserListener.prototype.enterPivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause.
PlSqlParserListener.prototype.exitPivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause_element.
PlSqlParserListener.prototype.enterPivot_in_clause_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause_element.
PlSqlParserListener.prototype.exitPivot_in_clause_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#pivot_in_clause_elements.
PlSqlParserListener.prototype.enterPivot_in_clause_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#pivot_in_clause_elements.
PlSqlParserListener.prototype.exitPivot_in_clause_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_clause.
PlSqlParserListener.prototype.enterUnpivot_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_clause.
PlSqlParserListener.prototype.exitUnpivot_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_in_clause.
PlSqlParserListener.prototype.enterUnpivot_in_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_in_clause.
PlSqlParserListener.prototype.exitUnpivot_in_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unpivot_in_elements.
PlSqlParserListener.prototype.enterUnpivot_in_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unpivot_in_elements.
PlSqlParserListener.prototype.exitUnpivot_in_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#hierarchical_query_clause.
PlSqlParserListener.prototype.enterHierarchical_query_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#hierarchical_query_clause.
PlSqlParserListener.prototype.exitHierarchical_query_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#start_part.
PlSqlParserListener.prototype.enterStart_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#start_part.
PlSqlParserListener.prototype.exitStart_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#group_by_clause.
PlSqlParserListener.prototype.enterGroup_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#group_by_clause.
PlSqlParserListener.prototype.exitGroup_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#group_by_elements.
PlSqlParserListener.prototype.enterGroup_by_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#group_by_elements.
PlSqlParserListener.prototype.exitGroup_by_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollup_cube_clause.
PlSqlParserListener.prototype.enterRollup_cube_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollup_cube_clause.
PlSqlParserListener.prototype.exitRollup_cube_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grouping_sets_clause.
PlSqlParserListener.prototype.enterGrouping_sets_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grouping_sets_clause.
PlSqlParserListener.prototype.exitGrouping_sets_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#grouping_sets_elements.
PlSqlParserListener.prototype.enterGrouping_sets_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#grouping_sets_elements.
PlSqlParserListener.prototype.exitGrouping_sets_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#having_clause.
PlSqlParserListener.prototype.enterHaving_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#having_clause.
PlSqlParserListener.prototype.exitHaving_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_clause.
PlSqlParserListener.prototype.enterModel_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_clause.
PlSqlParserListener.prototype.exitModel_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cell_reference_options.
PlSqlParserListener.prototype.enterCell_reference_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cell_reference_options.
PlSqlParserListener.prototype.exitCell_reference_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#return_rows_clause.
PlSqlParserListener.prototype.enterReturn_rows_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#return_rows_clause.
PlSqlParserListener.prototype.exitReturn_rows_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_model.
PlSqlParserListener.prototype.enterReference_model = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_model.
PlSqlParserListener.prototype.exitReference_model = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#main_model.
PlSqlParserListener.prototype.enterMain_model = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#main_model.
PlSqlParserListener.prototype.exitMain_model = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_clauses.
PlSqlParserListener.prototype.enterModel_column_clauses = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_clauses.
PlSqlParserListener.prototype.exitModel_column_clauses = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_partition_part.
PlSqlParserListener.prototype.enterModel_column_partition_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_partition_part.
PlSqlParserListener.prototype.exitModel_column_partition_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column_list.
PlSqlParserListener.prototype.enterModel_column_list = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column_list.
PlSqlParserListener.prototype.exitModel_column_list = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_column.
PlSqlParserListener.prototype.enterModel_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_column.
PlSqlParserListener.prototype.exitModel_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_clause.
PlSqlParserListener.prototype.enterModel_rules_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_clause.
PlSqlParserListener.prototype.exitModel_rules_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_part.
PlSqlParserListener.prototype.enterModel_rules_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_part.
PlSqlParserListener.prototype.exitModel_rules_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_rules_element.
PlSqlParserListener.prototype.enterModel_rules_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_rules_element.
PlSqlParserListener.prototype.exitModel_rules_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cell_assignment.
PlSqlParserListener.prototype.enterCell_assignment = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cell_assignment.
PlSqlParserListener.prototype.exitCell_assignment = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_iterate_clause.
PlSqlParserListener.prototype.enterModel_iterate_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_iterate_clause.
PlSqlParserListener.prototype.exitModel_iterate_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#until_part.
PlSqlParserListener.prototype.enterUntil_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#until_part.
PlSqlParserListener.prototype.exitUntil_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#order_by_clause.
PlSqlParserListener.prototype.enterOrder_by_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#order_by_clause.
PlSqlParserListener.prototype.exitOrder_by_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#order_by_elements.
PlSqlParserListener.prototype.enterOrder_by_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#order_by_elements.
PlSqlParserListener.prototype.exitOrder_by_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_clause.
PlSqlParserListener.prototype.enterFor_update_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_clause.
PlSqlParserListener.prototype.exitFor_update_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_of_part.
PlSqlParserListener.prototype.enterFor_update_of_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_of_part.
PlSqlParserListener.prototype.exitFor_update_of_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#for_update_options.
PlSqlParserListener.prototype.enterFor_update_options = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#for_update_options.
PlSqlParserListener.prototype.exitFor_update_options = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_statement.
PlSqlParserListener.prototype.enterUpdate_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_statement.
PlSqlParserListener.prototype.exitUpdate_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#update_set_clause.
PlSqlParserListener.prototype.enterUpdate_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#update_set_clause.
PlSqlParserListener.prototype.exitUpdate_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_based_update_set_clause.
PlSqlParserListener.prototype.enterColumn_based_update_set_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_based_update_set_clause.
PlSqlParserListener.prototype.exitColumn_based_update_set_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#delete_statement.
PlSqlParserListener.prototype.enterDelete_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#delete_statement.
PlSqlParserListener.prototype.exitDelete_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#insert_statement.
PlSqlParserListener.prototype.enterInsert_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#insert_statement.
PlSqlParserListener.prototype.exitInsert_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#single_table_insert.
PlSqlParserListener.prototype.enterSingle_table_insert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#single_table_insert.
PlSqlParserListener.prototype.exitSingle_table_insert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_table_insert.
PlSqlParserListener.prototype.enterMulti_table_insert = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_table_insert.
PlSqlParserListener.prototype.exitMulti_table_insert = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_table_element.
PlSqlParserListener.prototype.enterMulti_table_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_table_element.
PlSqlParserListener.prototype.exitMulti_table_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_clause.
PlSqlParserListener.prototype.enterConditional_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_clause.
PlSqlParserListener.prototype.exitConditional_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_when_part.
PlSqlParserListener.prototype.enterConditional_insert_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_when_part.
PlSqlParserListener.prototype.exitConditional_insert_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#conditional_insert_else_part.
PlSqlParserListener.prototype.enterConditional_insert_else_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#conditional_insert_else_part.
PlSqlParserListener.prototype.exitConditional_insert_else_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#insert_into_clause.
PlSqlParserListener.prototype.enterInsert_into_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#insert_into_clause.
PlSqlParserListener.prototype.exitInsert_into_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#values_clause.
PlSqlParserListener.prototype.enterValues_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#values_clause.
PlSqlParserListener.prototype.exitValues_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_statement.
PlSqlParserListener.prototype.enterMerge_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_statement.
PlSqlParserListener.prototype.exitMerge_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_update_clause.
PlSqlParserListener.prototype.enterMerge_update_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_update_clause.
PlSqlParserListener.prototype.exitMerge_update_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_element.
PlSqlParserListener.prototype.enterMerge_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_element.
PlSqlParserListener.prototype.exitMerge_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_update_delete_part.
PlSqlParserListener.prototype.enterMerge_update_delete_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_update_delete_part.
PlSqlParserListener.prototype.exitMerge_update_delete_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#merge_insert_clause.
PlSqlParserListener.prototype.enterMerge_insert_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#merge_insert_clause.
PlSqlParserListener.prototype.exitMerge_insert_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#selected_tableview.
PlSqlParserListener.prototype.enterSelected_tableview = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#selected_tableview.
PlSqlParserListener.prototype.exitSelected_tableview = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_table_statement.
PlSqlParserListener.prototype.enterLock_table_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_table_statement.
PlSqlParserListener.prototype.exitLock_table_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#wait_nowait_part.
PlSqlParserListener.prototype.enterWait_nowait_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#wait_nowait_part.
PlSqlParserListener.prototype.exitWait_nowait_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_table_element.
PlSqlParserListener.prototype.enterLock_table_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_table_element.
PlSqlParserListener.prototype.exitLock_table_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#lock_mode.
PlSqlParserListener.prototype.enterLock_mode = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#lock_mode.
PlSqlParserListener.prototype.exitLock_mode = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_table_ref.
PlSqlParserListener.prototype.enterGeneral_table_ref = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_table_ref.
PlSqlParserListener.prototype.exitGeneral_table_ref = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#static_returning_clause.
PlSqlParserListener.prototype.enterStatic_returning_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#static_returning_clause.
PlSqlParserListener.prototype.exitStatic_returning_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_clause.
PlSqlParserListener.prototype.enterError_logging_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_clause.
PlSqlParserListener.prototype.exitError_logging_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_into_part.
PlSqlParserListener.prototype.enterError_logging_into_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_into_part.
PlSqlParserListener.prototype.exitError_logging_into_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#error_logging_reject_part.
PlSqlParserListener.prototype.enterError_logging_reject_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#error_logging_reject_part.
PlSqlParserListener.prototype.exitError_logging_reject_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#dml_table_expression_clause.
PlSqlParserListener.prototype.enterDml_table_expression_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#dml_table_expression_clause.
PlSqlParserListener.prototype.exitDml_table_expression_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_collection_expression.
PlSqlParserListener.prototype.enterTable_collection_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_collection_expression.
PlSqlParserListener.prototype.exitTable_collection_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#subquery_restriction_clause.
PlSqlParserListener.prototype.enterSubquery_restriction_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#subquery_restriction_clause.
PlSqlParserListener.prototype.exitSubquery_restriction_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sample_clause.
PlSqlParserListener.prototype.enterSample_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sample_clause.
PlSqlParserListener.prototype.exitSample_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#seed_part.
PlSqlParserListener.prototype.enterSeed_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#seed_part.
PlSqlParserListener.prototype.exitSeed_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#condition.
PlSqlParserListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#condition.
PlSqlParserListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#expressions.
PlSqlParserListener.prototype.enterExpressions = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#expressions.
PlSqlParserListener.prototype.exitExpressions = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#expression.
PlSqlParserListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#expression.
PlSqlParserListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_expression.
PlSqlParserListener.prototype.enterCursor_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_expression.
PlSqlParserListener.prototype.exitCursor_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#logical_expression.
PlSqlParserListener.prototype.enterLogical_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#logical_expression.
PlSqlParserListener.prototype.exitLogical_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multiset_expression.
PlSqlParserListener.prototype.enterMultiset_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multiset_expression.
PlSqlParserListener.prototype.exitMultiset_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_expression.
PlSqlParserListener.prototype.enterRelational_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_expression.
PlSqlParserListener.prototype.exitRelational_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#compound_expression.
PlSqlParserListener.prototype.enterCompound_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#compound_expression.
PlSqlParserListener.prototype.exitCompound_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#relational_operator.
PlSqlParserListener.prototype.enterRelational_operator = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#relational_operator.
PlSqlParserListener.prototype.exitRelational_operator = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#in_elements.
PlSqlParserListener.prototype.enterIn_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#in_elements.
PlSqlParserListener.prototype.exitIn_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#between_elements.
PlSqlParserListener.prototype.enterBetween_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#between_elements.
PlSqlParserListener.prototype.exitBetween_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#concatenation.
PlSqlParserListener.prototype.enterConcatenation = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#concatenation.
PlSqlParserListener.prototype.exitConcatenation = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#interval_expression.
PlSqlParserListener.prototype.enterInterval_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#interval_expression.
PlSqlParserListener.prototype.exitInterval_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_expression.
PlSqlParserListener.prototype.enterModel_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_expression.
PlSqlParserListener.prototype.exitModel_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#model_expression_element.
PlSqlParserListener.prototype.enterModel_expression_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#model_expression_element.
PlSqlParserListener.prototype.exitModel_expression_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#single_column_for_loop.
PlSqlParserListener.prototype.enterSingle_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#single_column_for_loop.
PlSqlParserListener.prototype.exitSingle_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#multi_column_for_loop.
PlSqlParserListener.prototype.enterMulti_column_for_loop = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#multi_column_for_loop.
PlSqlParserListener.prototype.exitMulti_column_for_loop = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#unary_expression.
PlSqlParserListener.prototype.enterUnary_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#unary_expression.
PlSqlParserListener.prototype.exitUnary_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#case_statement.
PlSqlParserListener.prototype.enterCase_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#case_statement.
PlSqlParserListener.prototype.exitCase_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_case_statement.
PlSqlParserListener.prototype.enterSimple_case_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_case_statement.
PlSqlParserListener.prototype.exitSimple_case_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#simple_case_when_part.
PlSqlParserListener.prototype.enterSimple_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#simple_case_when_part.
PlSqlParserListener.prototype.exitSimple_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#searched_case_statement.
PlSqlParserListener.prototype.enterSearched_case_statement = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#searched_case_statement.
PlSqlParserListener.prototype.exitSearched_case_statement = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#searched_case_when_part.
PlSqlParserListener.prototype.enterSearched_case_when_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#searched_case_when_part.
PlSqlParserListener.prototype.exitSearched_case_when_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#case_else_part.
PlSqlParserListener.prototype.enterCase_else_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#case_else_part.
PlSqlParserListener.prototype.exitCase_else_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#atom.
PlSqlParserListener.prototype.enterAtom = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#atom.
PlSqlParserListener.prototype.exitAtom = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quantified_expression.
PlSqlParserListener.prototype.enterQuantified_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quantified_expression.
PlSqlParserListener.prototype.exitQuantified_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#string_function.
PlSqlParserListener.prototype.enterString_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#string_function.
PlSqlParserListener.prototype.exitString_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standard_function.
PlSqlParserListener.prototype.enterStandard_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standard_function.
PlSqlParserListener.prototype.exitStandard_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function_wrapper.
PlSqlParserListener.prototype.enterNumeric_function_wrapper = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function_wrapper.
PlSqlParserListener.prototype.exitNumeric_function_wrapper = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function.
PlSqlParserListener.prototype.enterNumeric_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function.
PlSqlParserListener.prototype.exitNumeric_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#other_function.
PlSqlParserListener.prototype.enterOther_function = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#other_function.
PlSqlParserListener.prototype.exitOther_function = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#over_clause_keyword.
PlSqlParserListener.prototype.enterOver_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#over_clause_keyword.
PlSqlParserListener.prototype.exitOver_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#within_or_over_clause_keyword.
PlSqlParserListener.prototype.enterWithin_or_over_clause_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#within_or_over_clause_keyword.
PlSqlParserListener.prototype.exitWithin_or_over_clause_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#standard_prediction_function_keyword.
PlSqlParserListener.prototype.enterStandard_prediction_function_keyword = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#standard_prediction_function_keyword.
PlSqlParserListener.prototype.exitStandard_prediction_function_keyword = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#over_clause.
PlSqlParserListener.prototype.enterOver_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#over_clause.
PlSqlParserListener.prototype.exitOver_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_clause.
PlSqlParserListener.prototype.enterWindowing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_clause.
PlSqlParserListener.prototype.exitWindowing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_type.
PlSqlParserListener.prototype.enterWindowing_type = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_type.
PlSqlParserListener.prototype.exitWindowing_type = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#windowing_elements.
PlSqlParserListener.prototype.enterWindowing_elements = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#windowing_elements.
PlSqlParserListener.prototype.exitWindowing_elements = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_clause.
PlSqlParserListener.prototype.enterUsing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_clause.
PlSqlParserListener.prototype.exitUsing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#using_element.
PlSqlParserListener.prototype.enterUsing_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#using_element.
PlSqlParserListener.prototype.exitUsing_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collect_order_by_part.
PlSqlParserListener.prototype.enterCollect_order_by_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collect_order_by_part.
PlSqlParserListener.prototype.exitCollect_order_by_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#within_or_over_part.
PlSqlParserListener.prototype.enterWithin_or_over_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#within_or_over_part.
PlSqlParserListener.prototype.exitWithin_or_over_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cost_matrix_clause.
PlSqlParserListener.prototype.enterCost_matrix_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cost_matrix_clause.
PlSqlParserListener.prototype.exitCost_matrix_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_passing_clause.
PlSqlParserListener.prototype.enterXml_passing_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_passing_clause.
PlSqlParserListener.prototype.exitXml_passing_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_attributes_clause.
PlSqlParserListener.prototype.enterXml_attributes_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_attributes_clause.
PlSqlParserListener.prototype.exitXml_attributes_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_namespaces_clause.
PlSqlParserListener.prototype.enterXml_namespaces_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_namespaces_clause.
PlSqlParserListener.prototype.exitXml_namespaces_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_table_column.
PlSqlParserListener.prototype.enterXml_table_column = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_table_column.
PlSqlParserListener.prototype.exitXml_table_column = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_general_default_part.
PlSqlParserListener.prototype.enterXml_general_default_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_general_default_part.
PlSqlParserListener.prototype.exitXml_general_default_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_multiuse_expression_element.
PlSqlParserListener.prototype.enterXml_multiuse_expression_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_multiuse_expression_element.
PlSqlParserListener.prototype.exitXml_multiuse_expression_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlroot_param_version_part.
PlSqlParserListener.prototype.enterXmlroot_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlroot_param_version_part.
PlSqlParserListener.prototype.exitXmlroot_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlroot_param_standalone_part.
PlSqlParserListener.prototype.enterXmlroot_param_standalone_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlroot_param_standalone_part.
PlSqlParserListener.prototype.exitXmlroot_param_standalone_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_enconding_part.
PlSqlParserListener.prototype.enterXmlserialize_param_enconding_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_enconding_part.
PlSqlParserListener.prototype.exitXmlserialize_param_enconding_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_version_part.
PlSqlParserListener.prototype.enterXmlserialize_param_version_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_version_part.
PlSqlParserListener.prototype.exitXmlserialize_param_version_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xmlserialize_param_ident_part.
PlSqlParserListener.prototype.enterXmlserialize_param_ident_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xmlserialize_param_ident_part.
PlSqlParserListener.prototype.exitXmlserialize_param_ident_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sql_plus_command.
PlSqlParserListener.prototype.enterSql_plus_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sql_plus_command.
PlSqlParserListener.prototype.exitSql_plus_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#whenever_command.
PlSqlParserListener.prototype.enterWhenever_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#whenever_command.
PlSqlParserListener.prototype.exitWhenever_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#set_command.
PlSqlParserListener.prototype.enterSet_command = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#set_command.
PlSqlParserListener.prototype.exitSet_command = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#partition_extension_clause.
PlSqlParserListener.prototype.enterPartition_extension_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#partition_extension_clause.
PlSqlParserListener.prototype.exitPartition_extension_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_alias.
PlSqlParserListener.prototype.enterColumn_alias = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_alias.
PlSqlParserListener.prototype.exitColumn_alias = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_alias.
PlSqlParserListener.prototype.enterTable_alias = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_alias.
PlSqlParserListener.prototype.exitTable_alias = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#where_clause.
PlSqlParserListener.prototype.enterWhere_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#where_clause.
PlSqlParserListener.prototype.exitWhere_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#into_clause.
PlSqlParserListener.prototype.enterInto_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#into_clause.
PlSqlParserListener.prototype.exitInto_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#xml_column_name.
PlSqlParserListener.prototype.enterXml_column_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#xml_column_name.
PlSqlParserListener.prototype.exitXml_column_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cost_class_name.
PlSqlParserListener.prototype.enterCost_class_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cost_class_name.
PlSqlParserListener.prototype.exitCost_class_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#attribute_name.
PlSqlParserListener.prototype.enterAttribute_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#attribute_name.
PlSqlParserListener.prototype.exitAttribute_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#savepoint_name.
PlSqlParserListener.prototype.enterSavepoint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#savepoint_name.
PlSqlParserListener.prototype.exitSavepoint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#rollback_segment_name.
PlSqlParserListener.prototype.enterRollback_segment_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#rollback_segment_name.
PlSqlParserListener.prototype.exitRollback_segment_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_var_name.
PlSqlParserListener.prototype.enterTable_var_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_var_name.
PlSqlParserListener.prototype.exitTable_var_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#schema_name.
PlSqlParserListener.prototype.enterSchema_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#schema_name.
PlSqlParserListener.prototype.exitSchema_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#routine_name.
PlSqlParserListener.prototype.enterRoutine_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#routine_name.
PlSqlParserListener.prototype.exitRoutine_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#package_name.
PlSqlParserListener.prototype.enterPackage_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#package_name.
PlSqlParserListener.prototype.exitPackage_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#implementation_type_name.
PlSqlParserListener.prototype.enterImplementation_type_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#implementation_type_name.
PlSqlParserListener.prototype.exitImplementation_type_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#parameter_name.
PlSqlParserListener.prototype.enterParameter_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#parameter_name.
PlSqlParserListener.prototype.exitParameter_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#reference_model_name.
PlSqlParserListener.prototype.enterReference_model_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#reference_model_name.
PlSqlParserListener.prototype.exitReference_model_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#main_model_name.
PlSqlParserListener.prototype.enterMain_model_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#main_model_name.
PlSqlParserListener.prototype.exitMain_model_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#aggregate_function_name.
PlSqlParserListener.prototype.enterAggregate_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#aggregate_function_name.
PlSqlParserListener.prototype.exitAggregate_function_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#query_name.
PlSqlParserListener.prototype.enterQuery_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#query_name.
PlSqlParserListener.prototype.exitQuery_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constraint_name.
PlSqlParserListener.prototype.enterConstraint_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constraint_name.
PlSqlParserListener.prototype.exitConstraint_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#label_name.
PlSqlParserListener.prototype.enterLabel_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#label_name.
PlSqlParserListener.prototype.exitLabel_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_name.
PlSqlParserListener.prototype.enterType_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_name.
PlSqlParserListener.prototype.exitType_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#sequence_name.
PlSqlParserListener.prototype.enterSequence_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#sequence_name.
PlSqlParserListener.prototype.exitSequence_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#exception_name.
PlSqlParserListener.prototype.enterException_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#exception_name.
PlSqlParserListener.prototype.exitException_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_name.
PlSqlParserListener.prototype.enterFunction_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_name.
PlSqlParserListener.prototype.exitFunction_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#procedure_name.
PlSqlParserListener.prototype.enterProcedure_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#procedure_name.
PlSqlParserListener.prototype.exitProcedure_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#trigger_name.
PlSqlParserListener.prototype.enterTrigger_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#trigger_name.
PlSqlParserListener.prototype.exitTrigger_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#variable_name.
PlSqlParserListener.prototype.enterVariable_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#variable_name.
PlSqlParserListener.prototype.exitVariable_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#index_name.
PlSqlParserListener.prototype.enterIndex_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#index_name.
PlSqlParserListener.prototype.exitIndex_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#cursor_name.
PlSqlParserListener.prototype.enterCursor_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#cursor_name.
PlSqlParserListener.prototype.exitCursor_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#record_name.
PlSqlParserListener.prototype.enterRecord_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#record_name.
PlSqlParserListener.prototype.exitRecord_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#collection_name.
PlSqlParserListener.prototype.enterCollection_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#collection_name.
PlSqlParserListener.prototype.exitCollection_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#link_name.
PlSqlParserListener.prototype.enterLink_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#link_name.
PlSqlParserListener.prototype.exitLink_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#column_name.
PlSqlParserListener.prototype.enterColumn_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#column_name.
PlSqlParserListener.prototype.exitColumn_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#tableview_name.
PlSqlParserListener.prototype.enterTableview_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#tableview_name.
PlSqlParserListener.prototype.exitTableview_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#char_set_name.
PlSqlParserListener.prototype.enterChar_set_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#char_set_name.
PlSqlParserListener.prototype.exitChar_set_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#synonym_name.
PlSqlParserListener.prototype.enterSynonym_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#synonym_name.
PlSqlParserListener.prototype.exitSynonym_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#schema_object_name.
PlSqlParserListener.prototype.enterSchema_object_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#schema_object_name.
PlSqlParserListener.prototype.exitSchema_object_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#keep_clause.
PlSqlParserListener.prototype.enterKeep_clause = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#keep_clause.
PlSqlParserListener.prototype.exitKeep_clause = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument.
PlSqlParserListener.prototype.enterFunction_argument = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument.
PlSqlParserListener.prototype.exitFunction_argument = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument_analytic.
PlSqlParserListener.prototype.enterFunction_argument_analytic = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument_analytic.
PlSqlParserListener.prototype.exitFunction_argument_analytic = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#function_argument_modeling.
PlSqlParserListener.prototype.enterFunction_argument_modeling = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#function_argument_modeling.
PlSqlParserListener.prototype.exitFunction_argument_modeling = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#respect_or_ignore_nulls.
PlSqlParserListener.prototype.enterRespect_or_ignore_nulls = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#respect_or_ignore_nulls.
PlSqlParserListener.prototype.exitRespect_or_ignore_nulls = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#argument.
PlSqlParserListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#argument.
PlSqlParserListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#type_spec.
PlSqlParserListener.prototype.enterType_spec = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#type_spec.
PlSqlParserListener.prototype.exitType_spec = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#datatype.
PlSqlParserListener.prototype.enterDatatype = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#datatype.
PlSqlParserListener.prototype.exitDatatype = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#precision_part.
PlSqlParserListener.prototype.enterPrecision_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#precision_part.
PlSqlParserListener.prototype.exitPrecision_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#native_datatype_element.
PlSqlParserListener.prototype.enterNative_datatype_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#native_datatype_element.
PlSqlParserListener.prototype.exitNative_datatype_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#bind_variable.
PlSqlParserListener.prototype.enterBind_variable = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#bind_variable.
PlSqlParserListener.prototype.exitBind_variable = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_element.
PlSqlParserListener.prototype.enterGeneral_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_element.
PlSqlParserListener.prototype.exitGeneral_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#general_element_part.
PlSqlParserListener.prototype.enterGeneral_element_part = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#general_element_part.
PlSqlParserListener.prototype.exitGeneral_element_part = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#table_element.
PlSqlParserListener.prototype.enterTable_element = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#table_element.
PlSqlParserListener.prototype.exitTable_element = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#constant.
PlSqlParserListener.prototype.enterConstant = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#constant.
PlSqlParserListener.prototype.exitConstant = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric.
PlSqlParserListener.prototype.enterNumeric = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric.
PlSqlParserListener.prototype.exitNumeric = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_negative.
PlSqlParserListener.prototype.enterNumeric_negative = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_negative.
PlSqlParserListener.prototype.exitNumeric_negative = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#quoted_string.
PlSqlParserListener.prototype.enterQuoted_string = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#quoted_string.
PlSqlParserListener.prototype.exitQuoted_string = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#identifier.
PlSqlParserListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#identifier.
PlSqlParserListener.prototype.exitIdentifier = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#id_expression.
PlSqlParserListener.prototype.enterId_expression = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#id_expression.
PlSqlParserListener.prototype.exitId_expression = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#outer_join_sign.
PlSqlParserListener.prototype.enterOuter_join_sign = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#outer_join_sign.
PlSqlParserListener.prototype.exitOuter_join_sign = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#regular_id.
PlSqlParserListener.prototype.enterRegular_id = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#regular_id.
PlSqlParserListener.prototype.exitRegular_id = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#string_function_name.
PlSqlParserListener.prototype.enterString_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#string_function_name.
PlSqlParserListener.prototype.exitString_function_name = function(ctx) {
};


// Enter a parse tree produced by PlSqlParser#numeric_function_name.
PlSqlParserListener.prototype.enterNumeric_function_name = function(ctx) {
};

// Exit a parse tree produced by PlSqlParser#numeric_function_name.
PlSqlParserListener.prototype.exitNumeric_function_name = function(ctx) {
};



exports.PlSqlParserListener = PlSqlParserListener;