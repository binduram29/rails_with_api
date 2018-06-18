module Api
	module V1
		class ArticlesController < ApplicationController
          def index 
            @articles = Article.all
            render json: {status: "SUCCESS", message: "loaded articles", data:@articles},status: :ok
          end

          def show
          	article = Article.find(params[:id])
          	render json: {status: "SUCCESS", message: "loaded article", data:article},status: :ok
          end

          def create
          	article = Article.new(article_params)
          	if article.save!
          		render json: {status: "SUCCESS", message: "saved article", data:article},status: :ok
          	else
          		render json: {status: "ERROR", message: "article not saved", data:article.errors},status: :unprocessable_entiry
          	end
          end

          def destroy
          	article = Article.find(params[:id])
          	article.destroy
          	render json: {status: "SUCESS", message: "deleted article", data:article.errors},status: :ok
          end

          private

          def article_params
          	params.permit(:title, :body)
          end
		end
	end
end