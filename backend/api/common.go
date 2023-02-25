package api

const (
	failedToParseData = "failed_to_parse_request_data"
)

type ErrorResponse struct {
	Error string `json:"error"`
}

func errorResponse(errorName string) ErrorResponse {
	return ErrorResponse{Error: errorName}
}
