class PostsController < ApplicationController
  before_action :authenticate_user!

  def upvote
    @post = Post.find(params[:id])
    if current_user.voted_up_on? @post
    @post.unvote_by current_user
    else
    @post.upvote_by current_user
    end
    redirect_to post_path	
  end

  def downvote
    @post = Post.find(params[:id])
    if current_user.voted_down_on? @post
    @post.unvote_by current_user
    else
    @post.downvote_by current_user
    end
    redirect_to post_path	
  end


    def index
        @posts = Post.all
    end

    def myposts
      @posts = Post.all
    end

    def show
        @post = Post.find(params[:id])
        @comment = @post.comments.build
    end

    def new
        @post = Post.new
      end
    
      def create
        @post = Post.new(post_params)
    
        if @post.save
          redirect_to @post
        else
          render :new, status: :unprocessable_entity
        end
      end

      def edit
        @post = Post.find(params[:id])
      end
    
      def update
        @post = Post.find(params[:id])
    
        if @post.update(post_params)
          redirect_to @post
        else
          render :edit, status: :unprocessable_entity
        end
      end
    
      def destroy
        @post = Post.find(params[:id])
        @post.destroy
    
        redirect_to root_path, status: :see_other
      end

      

      private
        def post_params
          params.require(:post).permit(:title, :user_id, :description, images: [])
        end
end
