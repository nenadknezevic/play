up:
	@docker-compose up -d --build
	@docker-compose ps

down:
	@docker-compose down

logs:
	@docker-compose logs
