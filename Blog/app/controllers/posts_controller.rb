class PostsController < ApplicationController

  before_action :authenticate_user!

  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
    @comment = @post.comments.new
  end

  def new
    @post = Post.new
  end

  def create
    UserMailer.alert_admin.deliver
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
      redirect_to root_path
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    redirect_to root_path, status: :see_other
  end

  def mypost
    @posts = Post.all
  end

  private
    def post_params
      params.require(:post).permit(:title, :description,:user_id,:is_published,images:[])
    end

end