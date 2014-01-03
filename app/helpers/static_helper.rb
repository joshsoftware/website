module StaticHelper
  def check_if_active(tab)
    params[:action] == tab ? 'active' : ''
  end
end
