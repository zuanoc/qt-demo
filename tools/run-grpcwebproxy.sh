#!/bin/bash

./tools/grpcwebproxy \
--backend_addr=localhost:9001 \
--run_tls_server=false \
--allow_all_origins \
--server_http_max_read_timeout=99999999s \
--server_http_max_write_timeout=99999999s \
--use_websockets \
--backend_max_call_recv_msg_size=524288000
