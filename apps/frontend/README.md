grpc_tools_node_protoc \
--plugin=protoc-gen-ts_proto=../../node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_out=./src/compiled-proto \
--ts_proto_opt=env=browser,outputServices=nice-grpc,outputServices=generic-definitions,outputJsonMethods=false,useExactTypes=false \
--proto_path=./../../common/proto ./../../common/proto/*.proto
